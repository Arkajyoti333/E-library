import React from "react";

const posts = [
  {
    id: 1 ,
    category: "Technical",
    title: "Eloquent JavaScript",
    description:
      "There is more treasure in books than in all the pirate's loot on Treasure Island.",
    author: "Marijn Haverbeke",
    date: "4 April 2023",
    avatar:
      "https://images.pexels.com/photos/16513358/pexels-photo-16513358/free-photo-of-desert-silhouette-portrait.jpeg?auto=compress&cs=tinysrgb&w=600",
    poster:
      "https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2 ,
    category: "Story Books",
    title: "Durgo Rahasya",
    description:
      "Byomkesh Bakshi Durgo Rahasya || A Wonderful Books Written By Best Selling Bengali Author Sharadindu Bandyopadhyay",
    author: "Sharadindu Bandyopadhyay",
    date: "3 February 2020",
    avatar:
      "",
    poster:
      "https://m.media-amazon.com/images/I/51jDA1xYb0L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3 ,
    category: "Web Devlopment",
    title: "Dynamic HTML",
    description:
      "Packed with information on the latest web specifications and browser features, this new edition is your ultimate one-stop resource for HTML, XHTML, CSS, Document Object Model (DOM), and JavaScript development.",
    author: "Reilly Media, Inc.",
    date: "3 March 2024",
    avatar:
      "",
    poster:
      "https://images.pexels.com/photos/1181703/pexels-photo-1181703.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 1 ,
    category: "Technical",
    title: "Eloquent JavaScript",
    description:
      "There is more treasure in books than in all the pirate's loot on Treasure Island.",
    author: "Marijn Haverbeke",
    date: "4 April 2023",
    avatar:
      "https://images.pexels.com/photos/16513358/pexels-photo-16513358/free-photo-of-desert-silhouette-portrait.jpeg?auto=compress&cs=tinysrgb&w=600",
    poster:
      "https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2 ,
    category: "Story Books",
    title: "Durgo Rahasya",
    description:
      "Byomkesh Bakshi Durgo Rahasya || A Wonderful Books Written By Best Selling Bengali Author Sharadindu Bandyopadhyay",
    author: "Sharadindu Bandyopadhyay",
    date: "3 February 2020",
    avatar:
      "",
    poster:
      "https://m.media-amazon.com/images/I/51jDA1xYb0L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3 ,
    category: "Web Devlopment",
    title: "Dynamic HTML",
    description:
      "Packed with information on the latest web specifications and browser features, this new edition is your ultimate one-stop resource for HTML, XHTML, CSS, Document Object Model (DOM), and JavaScript development.",
    author: "Reilly Media, Inc.",
    date: "3 March 2024",
    avatar:
      "",
    poster:
      "https://images.pexels.com/photos/1181703/pexels-photo-1181703.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 1 ,
    category: "Technical",
    title: "Eloquent JavaScript",
    description:
      "There is more treasure in books than in all the pirate's loot on Treasure Island.",
    author: "Marijn Haverbeke",
    date: "4 April 2023",
    avatar:
      "https://images.pexels.com/photos/16513358/pexels-photo-16513358/free-photo-of-desert-silhouette-portrait.jpeg?auto=compress&cs=tinysrgb&w=600",
    poster:
      "https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2 ,
    category: "Story Books",
    title: "Durgo Rahasya",
    description:
      "Byomkesh Bakshi Durgo Rahasya || A Wonderful Books Written By Best Selling Bengali Author Sharadindu Bandyopadhyay",
    author: "Sharadindu Bandyopadhyay",
    date: "3 February 2020",
    avatar:
      "",
    poster:
      "https://m.media-amazon.com/images/I/51jDA1xYb0L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3 ,
    category: "Web Devlopment",
    title: "Dynamic HTML",
    description:
      "Packed with information on the latest web specifications and browser features, this new edition is your ultimate one-stop resource for HTML, XHTML, CSS, Document Object Model (DOM), and JavaScript development.",
    author: "Reilly Media, Inc.",
    date: "3 March 2024",
    avatar:
      "",
    poster:
      "https://images.pexels.com/photos/1181703/pexels-photo-1181703.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 1 ,
    category: "Technical",
    title: "Eloquent JavaScript",
    description:
      "There is more treasure in books than in all the pirate's loot on Treasure Island.",
    author: "Marijn Haverbeke",
    date: "4 April 2023",
    avatar:
      "https://images.pexels.com/photos/16513358/pexels-photo-16513358/free-photo-of-desert-silhouette-portrait.jpeg?auto=compress&cs=tinysrgb&w=600",
    poster:
      "https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2 ,
    category: "Story Books",
    title: "Durgo Rahasya",
    description:
      "Byomkesh Bakshi Durgo Rahasya A Wonderful Books Written By Best Selling Bengali Author Sharadindu Bandyopadhyay",
    author: "Sharadindu Bandyopadhyay",
    date: "3 February 2020",
    avatar:
      "",
    poster:
      "https://m.media-amazon.com/images/I/51jDA1xYb0L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3 ,
    category: "Web Devlopment",
    title: "Dynamic HTML",
    description:
      "Packed with information on the latest web specifications and browser features, this new edition is your ultimate one-stop resource for HTML, XHTML, CSS, Document Object Model (DOM), and JavaScript development.",
    author: "Reilly Media, Inc.",
    date: "3 March 2024",
    avatar:
      "",
    poster:
      "https://images.pexels.com/photos/1181703/pexels-photo-1181703.jpeg?auto=compress&cs=tinysrgb&w=600",
  },


 
];

const tags = ["Technical","Web Devlopment" , "Software Engineering", "Story Books","Comics"];

const BookPost = () => {
  return (
    <>
      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.title}
            className="border bg-white shadow-md rounded-md p-4 max-w-sm mx-auto relative"
          >
            <img
              src={post.poster}
              className="aspect-video w-full rounded-md"
              alt=""
            />
            <div className="min-h-min mt-4">
              <p className="text-xs font-semibold leading-tight text-gray-700">
                #{post.category}
              </p>
              <p className="mt-2 text-base font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-2 text-sm leading-normal text-gray-600">
                {post.description}
              </p>
              <div className="mt-2 flex space-x-3 items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src={post.avatar}
                  alt={post.author}
                />
                <div>
                  <p className="text-sm font-semibold leading-tight text-gray-900">
                    {post.author}
                  </p>
                  <p className="text-sm leading-tight text-gray-600">
                    {post.date}
                  </p>
                </div>
              </div>
              <button
                className="absolute bottom-0 right-0 bg-blue-700 text-white px-4 py-2 rounded-md mt-4 mr-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => console.log('Read More clicked for', post.title)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};



const BooksCom = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 bg-white shadow-lg rounded-md">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Resources and Books
          </p>
          <p className="max-w-4xl text-base text-gray-700 md:text-xl">
            There is more treasure in books than in all the pirate's loot on Treasure Island.
          </p>
          <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search Topics"
            />
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Search
            </button>
          </div>
        </div>
        <div className="mt-5 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end border-b border-gray-300 bg-white">
            {tags.map((filter, index) => (
              <div
                className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-gray-300"
                key={filter}
              >
                {filter}
              </div>
            ))}
          </div>
        </div>

        {/* posts */}

        <BookPost/>
   {/* posts End */}

        <div className="w-full border-t border-gray-300 bg-white">
          <div className="mt-2 flex items-center justify-between">
            <div className="hidden md:block">
              <p>
                Showing <strong>1</strong> to <strong>10</strong> of{" "}
                <strong>20</strong> results
              </p>
            </div>
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Books = () => {
  return (
    <div className=" m-4 text-white mt-[40px] ">
      <BooksCom />
    </div>
  );
};
export default Books;
