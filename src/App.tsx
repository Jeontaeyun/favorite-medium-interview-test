import React, { ReactElement } from "react";
import BaseLayout from "./component/layout/BaseLayout";
import ContactListContainer from "./container/ContactListContainer";
import FavoriteContactListContainer from "./container/FavoriteContactListContainer";

function App(): ReactElement {
  return (
    <BaseLayout>
      <ContactListContainer />
      <FavoriteContactListContainer />
    </BaseLayout>
  );
}

export default App;
