import React, { ReactElement } from "react";
import { Global, ThemeProvider } from "@emotion/react";

import BaseLayout from "./component/layout/BaseLayout";
import ContactListContainer from "./container/ContactListContainer";
import FavoriteContactListContainer from "./container/FavoriteContactListContainer";
import GlobalStyleConfig from "./assets/style/global-style";
import ThemeConfig from "./assets/style/theme-config";

function App(): ReactElement {
  return (
    <>
      <Global styles={GlobalStyleConfig} />
      <ThemeProvider theme={ThemeConfig}>
        <BaseLayout>
          <ContactListContainer />
          <FavoriteContactListContainer />
        </BaseLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
