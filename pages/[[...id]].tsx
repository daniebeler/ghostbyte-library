import Head from "next/head";
import Collection from "../components/Collection";
import Home from "../components/Home";
import Links from "../components/Links";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Post(props: any) {
  if (!props) return <p>No data</p>;

  return (
    <div>
      <Head>
        <title>Ghostbyte Library</title>
        <meta
          name="description"
          content="Categorized collections of useful websites and tools"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar />

      <div className="w-full">
        <div className="flex flex-row m-0 pt-[45px] md:pt-0 h-screen">
          <div className=" p-0 hidden md:block h-full">
            <div className="p-3 h-full overflow-scroll bg-gray-800">
              <Links toggleMenu={() => {}} />
            </div>
          </div>

          {props.data && (
            <div className="col p-0 h-full w-full">
              <div className="h-full bg-gray-900 overflow-scroll">
                <div className="container-fluid flex py-24">
                  <div className="container">
                    <h1 className="text-center text-white text-4xl uppercase">
                      {props.data.name}
                    </h1>
                  </div>
                </div>
                <Collection data={props.data.items} />
                <div className="mt-10 mb-10 text-center text-white">
                  Developed with ❤️ by{" "}
                  <Link href="https://ghostbyte.dev">
                    <strong className="text-white">Ghostbyte</strong>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {!props.data && (
            <div className="col p-0 h-full w-full">
              <div className={"h-full"}>
                <Home />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context: any) {
  let genre;
  let id;

  if (context.params.id) {
    genre = context.params.id[0];
    id = context.params.id[1];
  }

  if (genre && id) {
    const file = await import("../data/" + genre + "/" + id + ".json");
    return {
      props: {
        data: file.data,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: [""],
        },
      },
      {
        params: {
          id: ["design", "colors"],
        },
      },
      {
        params: {
          id: ["design", "ui-components"],
        },
      },
      {
        params: {
          id: ["design", "icons"],
        },
      },
      {
        params: {
          id: ["design", "games"],
        },
      },
      {
        params: {
          id: ["design", "inspiration"],
        },
      },
      {
        params: {
          id: ["design", "systems"],
        },
      },
      {
        params: {
          id: ["design", "illustrations"],
        },
      },
      {
        params: {
          id: ["design", "best-practices"],
        },
      },
      {
        params: {
          id: ["design", "tools"],
        },
      },
      {
        params: {
          id: ["design", "ai-art"],
        },
      },
      {
        params: {
          id: ["design", "stock-photos"],
        },
      },
      {
        params: {
          id: ["design", "fonts"],
        },
      },
      {
        params: {
          id: ["design", "extensions"],
        },
      },
    ],
    fallback: false,
  };
}
