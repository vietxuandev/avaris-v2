export default function PageStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .font-sans {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes move-wave {
          0% { transform: translate3d(-90px, 0, 0); }
          100% { transform: translate3d(85px, 0, 0); }
        }
        .parallaxonde > use {
          animation: move-wave 25s cubic-bezier(.55, .5, .45, .5) infinite;
        }
        .parallaxonde > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .parallaxonde > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallaxonde > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .parallaxonde > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `,
      }}
    />
  );
}
