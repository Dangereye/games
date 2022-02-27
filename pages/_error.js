import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useRouter } from "next/router";
import Button from "../components/shared/buttons/Button";

function NotFound() {
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();
  return (
    <section className="not-found" style={{ color: themeState.text.primary }}>
      <h1 className="display-title">awkward...</h1>
      <p className="body-text">
        Oops! We don&apos;t know how it happened, or why - the page you
        requested isn&apos;t here. Sorry :(
      </p>
      <Button
        name="Go Back"
        classes="btn--large btn--secondary btn--block"
        styles={{ borderColor: themeState.text.primary }}
        func={() => router.back()}
      />
      <Button
        name="View All games"
        classes="btn btn--large btn--primary btn--block"
        func={() => router.push("/")}
      />
    </section>
  );
}
export default NotFound;
