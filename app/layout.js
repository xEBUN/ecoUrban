import './globals.scss'

import {Providers} from "@//redux//provider";



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, pageProps  }) {
  return (
    <html lang="ru">
      <body>
      <Providers {...pageProps}>
        {children}
      </Providers>
      </body>
    </html>
  )
}
