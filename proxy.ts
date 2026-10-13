import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";
import {
  LOCALE_COOKIE,
  defaultLocale,
  hasLocale,
  locales,
  type Locale,
} from "./i18n/config";

/** Ngôn ngữ người dùng chọn ở nút chuyển sẽ được ưu tiên hơn hệ thống */
function getLocale(request: NextRequest): Locale {
  const preferred = request.cookies.get(LOCALE_COOKIE)?.value;
  if (preferred && hasLocale(preferred)) return preferred;

  const headers = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale) as Locale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Đường dẫn đã có tiền tố ngôn ngữ thì cho đi tiếp
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (pathnameHasLocale) return;

  // Chưa có tiền tố -> chuyển hướng sang ngôn ngữ phù hợp
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Bỏ qua đường dẫn nội bộ của Next và mọi tệp tĩnh (đường dẫn chứa dấu
     * chấm: .mp4, .png, .txt, .xml, .ico …) — nếu không, /videos/tvc.mp4
     * sẽ bị chuyển hướng thành /vi/videos/tvc.mp4 và 404.
     */
    "/((?!_next/static|_next/image|.*\\..*).*)",
  ],
};
