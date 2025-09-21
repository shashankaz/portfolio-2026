import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shashank's Portfolio",
    template: "%s | Shashank's Portfolio",
  },
  description:
    "Portfolio of Shashank, a Computer Science undergrad at IIIT Ranchi and full-stack developer. Passionate about building scalable web apps, exploring cloud infrastructure, and solving complex problems through code, design, and innovation.",

  keywords: [
    "Shashank",
    "Portfolio",
    "Full Stack Developer",
    "Web Development",
    "IIIT Ranchi",
    "React",
    "Next.js",
    "FastAPI",
    "PostgreSQL",
    "Cloud",
  ],

  authors: [{ name: "Shashank", url: "https://github.com/shashankaz" }],
  creator: "Shashank",
  publisher: "Shashank",

  metadataBase: new URL("https://byte9x.dev"),

  openGraph: {
    title: "Shashank's Portfolio",
    description:
      "Showcasing projects, experience, and achievements of Shashank — a full-stack developer and CSE undergrad at IIIT Ranchi.",
    url: "https://byte9x.dev",
    siteName: "Shashank's Portfolio",
    images: [
      {
        url: "https://byte9x.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Shashank's Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shashank's Portfolio",
    description:
      "Full-stack developer & CSE undergrad at IIIT Ranchi. Explore my projects, internships, and achievements.",
    creator: "@shashankaz",
    images: ["https://byte9x.dev/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <main className="relative">
          {children}
          <div className="fixed inset-0 h-screen bg-white -z-10 hidden items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="1920"
              height="1080"
              preserveAspectRatio="none"
              viewBox="0 0 1920 1080"
            >
              <g mask='url("#SvgjsMask1046")' fill="none">
                <rect
                  width="1920"
                  height="1080"
                  x="0"
                  y="0"
                  fill="rgba(248, 248, 255, 1)"
                ></rect>
                <path
                  d="M0,672.594C123.134,660.374,200.987,541.009,309.675,481.864C429.921,416.429,606.08,426.871,672.018,306.9C737.487,187.783,659.602,41.436,623.811,-89.69C592.017,-206.175,555.123,-321.248,475.733,-412.225C396.52,-502.999,291.007,-563.749,176.759,-601.986C59.249,-641.315,-65.673,-663.016,-186.078,-633.722C-309.677,-603.65,-437.071,-544.812,-503.676,-436.438C-568.035,-331.718,-516.601,-198.341,-528.826,-76.034C-540.361,39.363,-605.14,150.333,-573.478,261.899C-539.899,380.221,-451.864,475.905,-351.868,547.517C-248.573,621.492,-126.431,685.141,0,672.594"
                  fill="#9393ff"
                ></path>
                <path
                  d="M1920 1838.5149999999999C2059.569 1848.47 2137.033 1675.6399999999999 2248.109 1590.547 2348.088 1513.955 2484.2309999999998 1476.057 2540.328 1363.295 2596.927 1249.525 2574.062 1114.003 2546.941 989.86 2521.259 872.304 2476.652 756.152 2389.549 673.133 2306.314 593.8009999999999 2190.109 567.211 2077.7690000000002 542.688 1972.183 519.64 1868.076 529.352 1760.194 535.751 1619.759 544.081 1455.321 492.89300000000003 1349.743 585.87 1245.065 678.0550000000001 1258.538 844.565 1251.355 983.863 1244.7089999999998 1112.742 1239.017 1250.781 1309.893 1358.626 1377.6779999999999 1461.769 1523.644 1469.488 1620.654 1545.792 1732.616 1633.857 1777.915 1828.38 1920 1838.5149999999999"
                  fill="#ffffff"
                ></path>
              </g>
              <defs>
                <mask id="SvgjsMask1046">
                  <rect width="1920" height="1080" fill="#ffffff"></rect>
                </mask>
              </defs>
            </svg>
          </div>
        </main>
        <GoogleAnalytics gaId="G-DC71LPLF7L" />
      </body>
    </html>
  );
}
