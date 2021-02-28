import React, { ReactElement } from "react";
import { Global, ThemeProvider } from "@emotion/react";

import BaseLayout from "./component/layout/BaseLayout";
import ContactListContainer from "./container/ContactListContainer";
import FavoriteContactListContainer from "./container/FavoriteContactListContainer";
import GlobalStyleConfig from "./assets/style/global-style";
import ThemeConfig from "./assets/style/theme-config";
import RoledexContextProvider from "./lib/context/RoledexContextProvider";

function App(): ReactElement {
  return (
    <>
      <Global styles={GlobalStyleConfig} />
      <ThemeProvider theme={ThemeConfig}>
        <RoledexContextProvider>
          <BaseLayout>
            <FavoriteContactListContainer />
            <ContactListContainer />
          </BaseLayout>
        </RoledexContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
