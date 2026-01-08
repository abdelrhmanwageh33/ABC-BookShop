import { TabItem, Tabs } from "flowbite-react";
import { useContext } from "react";
import { bookcontext } from "../../Contexts/BookContext";
import Card from "../Card/Card";

export default function Puplish() {

        const {bookMount}= useContext(bookcontext)
    


  return (

     <section className="py-10 my-10">
      <div className="w-[90%] mx-auto">
        <h3 className="text-center mb-6 text-2xl font-semibold">
          Latest Published items
        </h3>

        <div className="mx-auto">
          <Tabs
            aria-label="Default tabs"
            variant="default"
            className="justify-center md:justify-end gap-5  "
              theme={{
    tablist: {
      tabitem: {
        base: "px-4 py-2 rounded-md transition-all duration-200 border-0 !important",
        active: {
          on: "bg-red-600 text-white border-red-600 !important",
          off: "bg-transparent text-gray-700 hover:bg-gray-100 border-transparent",
        },
      },
    },
  }}

          >
         
            <TabItem active title="ALL">
              <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bookMount?.slice(0, 8).map((item, i) => (
                  <Card book={item} key={i} />
                ))}
              </div>
            </TabItem>

           
            <TabItem title="Poetry">
              <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bookMount
                  ?.filter((item) =>
                    item.bookshelves?.includes("Category: Poetry")
                  )
                  .map((item, i) => (
                    <Card book={item} key={i} />
                  ))}
              </div>
            </TabItem>

            
            <TabItem title="Novel">
              <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bookMount
                  ?.filter((item) =>
                    item.bookshelves?.includes("Category: Novels")
                  )
                  ?.slice(0, 6)
                  ?.map((item, i) => (
                    <Card book={item} key={i} />
                  ))}
              </div>
            </TabItem>

         
            <TabItem title="Romance">
              <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bookMount
                  ?.filter((item) =>
                    item.bookshelves?.includes("Category: Romance")
                  )
                  ?.map((item, i) => (
                    <Card book={item} key={i} />
                  ))}
              </div>
            </TabItem>
          </Tabs>
        </div>
      </div>
    </section>

  )
}
