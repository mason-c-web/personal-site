import { Button } from "../Button";

export function About() {
  return (
    <>
      <p className="py-6">
        Hello, I'm Clare. I'm a software engineer looking to make the transition
        to software communications. My interest include, video editing, knitting
        my own clothes, front end design and web accessibility, and 2000's
        design aesthetics. Welcome to my site!
        <br />
        <br />
        Open to hybrid (in Seattle) or remote opportunities in Developer
        Relations, Technical Content Creation, or Accessibility Engineering
      </p>

      <div className="flex flex-row gap-3" style={{ paddingTop: "10px" }}>
        <Button href="mailto:clarermason@gmail.com" title="Email Me" />
        <Button
          href="https://www.linkedin.com/in/clarermason/"
          title="Linkedin"
        />
        <Button href="https://github.com/mason-c-web" title="GitHub" />
      </div>
      <img src="https://blob.gifcities.org/gifcities/66PVHQI3WTVHAMX4RC4VNSLOSBCO4BPS.gif" />
    </>
  );
}
