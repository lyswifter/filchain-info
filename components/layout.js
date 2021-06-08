import Head from 'next/head'
import styles from './layout.module.css'
import axios from 'axios'

import heightview from '../pages/chainheight'

export const siteTitle = 'Dinfity site to index filecoin deals'

export default function Layout({ children }) {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div>{siteTitle}</div>

      <div>
        <heightview></heightview>
      </div>
    </div>
  )
}

// export async function getServerSideProps() {
//   function GetBlockHeight() {
//     // curl -X POST -H "Content-Type: application/json" \
//     // --user 1te3yMNjbDeSiC3DlElH4LOtFXj:bb0f2b46df189a28dd5deb05e537bf65 \
//     // --url https://filecoin.infura.io \
//     // --data '{ "id": 0, "jsonrpc": "2.0", "method": "Filecoin.ChainHead", "params": [] }'
  
//     var data = JSON.stringify({"id":0,"jsonrpc":"2.0","method":"Filecoin.ChainHead","params":[]});
  
//     var config = {
//       method: 'post',
//       url: '/api',
//       headers: { 
//         'Content-Type': 'application/json', 
//         'Authorization': 'Basic MXRlM3lNTmpiRGVTaUMzRGxFbEg0TE90RlhqOmJiMGYyYjQ2ZGYxODlhMjhkZDVkZWIwNWU1MzdiZjY1'
//       },
//       data : data
//     };
  
//     axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//       console.log(response.data.result.Height);
//       chainHeight = response.data.result.Height;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }

//   GetBlockHeight()
// }