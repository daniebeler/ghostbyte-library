import Head from "next/head";
import Collection from "../../components/Collection"
import Footer from "../../components/Footer";
import Links from "../../components/Links";
import Navbar from "../../components/Navbar";

export default function Post(props: any) {

  if (!props) return <p>No data</p>

  return (
    <div className="page-wrapper">

      <Head>
        <title>Buckets Of Bookmarks</title>
        <meta
          name="description"
          content="Categorized collections of useful websites and tools"
        />
        <meta name="msvalidate.01" content="69FEAD321D5E273091E169DF37464921" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg">

      </div>
      {/* <Navbar /> */}

      <div className="inner-page-wrapper w-100">
        <div className="row height-screen">
          <div className="col-5 col-md-3 d-none d-sm-block height-full">
            <div className="sidebar h-full">
              <Links />
            </div>
          </div>
          <div className="col-12 col-sm-7 col-md-9 height-full">
            <div className="content h-full">
              <div className="container-fluid flex header-wrapper">
                <div className="container">
                  <h1 className="text-center headline">{props.data.name}</h1>
                </div>
              </div>

              {/* <div className="h-full w-100 bg-black filler"> */}
              <Collection data={props.data.items} />
              {/* </div> */}

              
            </div>

          </div>
        </div>
      </div>

      {/* <Footer /> */}


      <style>{`

      .height-screen {
        height: 100vh;
      }

      .height-full {
        height: 100%;
      }

      .filler {
        flex-grow: 1;
        display: flex;
      }

      .row-wrapper {
        height: 100vh;
      }

      .category {
        padding-left: 16px;
      }

      .bg {
        background-color: #3CCF4E;
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: -1;
      }

      .headline {
        color: #fff;
      }

      .sidebar {
        padding: 15px;
        width: 100%;
        height: 100vh;
        overflow: auto;
        // border-radius: 15px;
        background-color: #fff;
      }
      
      .sidebar a {
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
      }
       
      .sidebar a.active {
        background-color: #04AA6D;
        color: white;
      }
      
      .sidebar a:hover:not(.active) {
        background: rgba(255, 255, 255, 0.4);
        border-radius: 10px;
      }

        .page-wrapper {
          // background-image: linear-gradient(to bottom right, #b5d4f6, #b1aee7);
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .inner-page-wrapper {
          padding: 0px;
          max-width: 1140px;
          display: flex;
          flex-direction: column;
        }

        .content {
          // background: rgba(255, 255, 255, 0.4);
          border-radius: 15px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .header-wrapper {
          padding: 50px 0 50px 0
        }
      `}</style>
    </div>

  )
}


export async function getStaticProps(context: any) {

  const genre = context.params.genre
  const id = context.params.id

  const file = await import('../../data/' + genre + '/' + id + '.json')
  return {
    props: {
      data: file.data
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params:
        {
          genre: 'design',
          id: 'colors'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'icons'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'games'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'inspiration'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'systems'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'illustrations'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'best-practices'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'tools'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'ai-art'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'stock-photos'
        }
      },
      {
        params:
        {
          genre: 'design',
          id: 'fonts'
        }
      },
      {
        params:
        {
          genre: 'productivity',
          id: 'tools'
        }
      },
      {
        params:
        {
          genre: 'productivity',
          id: 'books'
        }
      },
      {
        params:
        {
          genre: 'coding',
          id: 'books'
        }
      },
      {
        params:
        {
          genre: 'coding',
          id: 'practice'
        }
      },
      {
        params:
        {
          genre: 'coding',
          id: 'ideas'
        }
      },
      {
        params:
        {
          genre: 'coding',
          id: 'vscode-extensions'
        }
      }
    ],
    fallback: false
  };
}
