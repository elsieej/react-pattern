import { useState } from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";

import { PrimaryButton, SecondaryButton } from "./components/button";
import { Modal } from "./components/modal";

import { SplitScreenLayout } from "./layouts";

import { BookList } from "./modules/book";
import { RegisterModal } from "./modules/register";

import { darkTheme, primaryTheme } from "./styles";
import { ContainerLoader } from "./components/container";
import {
  StarWarInfo,
  StarWarInfoWithLoader,
  StarWarInfoWrapper,
} from "./modules/starwar";
import { StarWarType } from "./types/api";
import { UncontrolledForm } from "./components/form";
import Recursive from "./modules/recursive/Recursive.tsx";
import { NestedObject } from "./types/nested-object.type.ts";
import { RedButton, RedSmallButton } from "./hocs";

const nestedObject: NestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <>
      <button
        style={{
          margin: "0 18px 26px",
          padding: "10px",
          background: "none",
          cursor: "pointer",
          border: "3px solid #fff",
        }}
        onClick={() => setUseDarkTheme(false)}
      >
        Light
      </button>
      <button
        style={{
          margin: "0 18px 26px",
          padding: "10px",
          background: "none",
          cursor: "pointer",
          border: "3px solid #fff",
        }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark
      </button>
      <ThemeProvider theme={useDarkTheme ? darkTheme : primaryTheme}>
        <SplitScreenLayout leftWidth={1} rightWidth={1}>
          <PrimaryButton>Click me!!!</PrimaryButton>
          <SecondaryButton>Click me too!!!</SecondaryButton>
        </SplitScreenLayout>

        <RegisterModal />

        <Modal>
          <BookList />
        </Modal>

        <ContainerLoader
          getData={getCharacterHandler}
          resourceName={"character"}
        >
          <StarWarInfo />
        </ContainerLoader>

        <UncontrolledForm />

        <StarWarInfoWrapper
          character={{
            name: "elsie",
            height: "172",
            hair_color: "blue",
          }}
        />

        <StarWarInfoWithLoader />

        <Recursive data={nestedObject} />

        <RedButton />

        <RedSmallButton />
      </ThemeProvider>
    </>
  );
}

const getCharacterHandler = async () => {
  const data = await axios.get<StarWarType>("https://swapi.dev/api/people/1");
  return data.data;
};

export default App;
