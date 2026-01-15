import data from "./data";
import { useContext } from "react";

import { PageIndexContext } from "./PageIndexContext";
export function PageContent() {
  const { pageIndex } = useContext(PageIndexContext);
  const page = data.userData[pageIndex];
  return (
    <div className={"hero-content flex-col lg:flex-row "}>
      <img src={page.image} className="max-w-sm  " />

      <div>
        <div className="flex flex-row items-end ">
          <img src={page.titleImage} />
          <img src={page.titleImage2} />
        </div>

        {/* <h1 className="text-5xl font-bold">{page.title}</h1> */}
        {page.descriptionHTML}
      </div>
    </div>
  );
}
