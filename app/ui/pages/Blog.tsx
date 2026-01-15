import { Button } from "../Button";

export function Blog() {
  return (
    <>
      <p className="py-6">
        I write project blogs, front end tutorials, and other engineering
        related topics on my personal Medium page.
        <br />
        <br />I also write for the Sustainable Capitol Hill on their blog about
        sustainability topics, and produce a volunteer interview series. I get
        to write about passions for sewing, community building, and ending
        corporate merch once and for all.
      </p>
      <div className="flex flex-row"></div>{" "}
      <div className="flex flex-row gap-3">
        <img src="https://blob.gifcities.org/gifcities/GH365M7YYOMLHHADCBFGVWIKAVTIHYBJ.gif" />
        <Button
          href="https://medium.com/@clarermason"
          title="Personal Techincal Blog"
        />
        <Button
          href="https://sustainablecapitolhill.org/blog/"
          title="Sustainable Capitol Hill Blog"
        />
      </div>
    </>
  );
}
