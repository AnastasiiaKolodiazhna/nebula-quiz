"use client";

import { getDefaultQuestion } from "@/utils/getQuestion";
import { useRouter } from "next/navigation";
import { Button, Container } from "./components/infoPage/InfoPage.style";

export default function Home() {
  const router = useRouter();
  const defaultQuestion = getDefaultQuestion();

  return (
    <Container>
      <Button onClick={() => router.push(`question/${defaultQuestion?.id}`)}>
        Start Quiz
      </Button>
    </Container>
  );
}
