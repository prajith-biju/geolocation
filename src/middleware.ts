import { geolocation } from '@vercel/functions';
import { NextResponse, NextRequest } from 'next/server';
 
export default function GET(request: NextRequest) {
  const { city } = geolocation(request);
  console.log(city)
  // return new Response(`<h1>Your location is ${city}</h1>`, {
  //   headers: { 'content-type': 'text/html' },
  // });


  // NextResponse.redirect(new URL(`${city}`, request.url))

  // return NextResponse.rewrite(new URL('/dest', request.url))

  const url = request.nextUrl.clone()
  url.pathname = '/dest'
  return NextResponse.redirect(url)
}

// export const config = {
//   natcher: "/not"
// }