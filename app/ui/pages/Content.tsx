import { Button } from "../Button";

export function Content() {
  return (
    <>
      <p className="py-6">
        Working in a makerspace taught me I really like making educational
        videos. I currently produce a short form form series about Seattle
        History and community spaces called <b>Seattle For You</b>, and long
        form series about tech called{" "}
        <b style={{ color: "deeppink" }}>Coding For Cuties</b>!
        <br />
        <br />
        I've also produced videos for other brands (mostly non profits) like
        Community Lunch On Captiol Hill, Seattle Dodgeball, and Sakura Con!
      </p>
      <div className="flex flex-row gap-3">
        <Button
          href="https://www.youtube.com/channel/UC9nuH-1XxaFYE0N59YJNfXg"
          title="Coding For Cuties"
        />

        <Button
          href="https://www.youtube.com/channel/UCsNpIT9GFANGkl-Ke0c_tgA/"
          title="Seattle For You"
        />

        <Button
          href="https://vimeo.com/clarermason"
          title="Nonprofit Portfolio"
        />

        <img src="https://blob.gifcities.org/gifcities/DROJ2XHWJ7JGVD7CLBGFWUBHNP2HC5HG.gif" />
      </div>
    </>
  );
}
