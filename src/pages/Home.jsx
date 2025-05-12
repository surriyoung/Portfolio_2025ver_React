import React, { useEffect, useState } from "react";

const words = ["a Publisher", "a Frontend", "surriyoung"];

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // 타이핑 로직
  useEffect(() => {
    if (isComplete || pause) return;

    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 100 : 150;

    const timer = setTimeout(() => {
      let updatedText = "";

      if (isDeleting) {
        updatedText = currentWord.substring(0, charIndex - 1);
        setCharIndex((prev) => prev - 1);
      } else {
        updatedText = currentWord.substring(0, charIndex + 1);
        setCharIndex((prev) => prev + 1);
      }

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        if (wordIndex === words.length - 1) {
          setPause(true);
          setTimeout(() => {
            setIsComplete(true);
          }, 500);
        } else {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, 1000);
        }
      }

      if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setCharIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, pause, isComplete]);

  return (
    <main id="home">
      <h1 className="desktop_h1">
        I'm&nbsp;&#123;
        {isComplete ? (
          <span>{words[words.length - 1]}</span>
        ) : (
          <span>{displayText}</span>
        )}
        &#125;
      </h1>
      <h1 className="mobile_h1">
        &#123;
        <span data-aos="fade-down" data-aos-delay="100">
          I
        </span>
        <span data-aos="fade-down" data-aos-delay="300">
          '
        </span>
        <span data-aos="fade-down" data-aos-delay="600">
          m
        </span>
        &#125;
      </h1>
      <h2>
        퍼블리셔를 넘어
        <br />
        프론트엔드로 성장하는
        <br />
        <strong>최수영</strong>입니다.
      </h2>

      <p>
        사용자 경험을 고려한 <strong>섬세한 퍼블리싱</strong>을 기반으로,
        <br />
        <strong>JavaScript, React, Flutter</strong>를 활용해
        <br />
        <strong>직관적이고 생동감 있는 인터페이스</strong>를 구현하는
        <br />
        <strong>사용자 중심의 프론트를 고민하는 개발자</strong>를 지향합니다.
      </p>
    </main>
  );
}

export default Home;
