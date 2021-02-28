import React, { useCallback, useContext, useMemo } from "react";
import styled from "@emotion/styled";

import { RoledexContext } from "../../lib/context/RoledexContextProvider";
import LocalStorageService from "../../lib/service/LocalStorageService";
import SimpleFavoriteContactCard from "../../component/card/SimpleFavoriteContactCard";

function FavoriteContactListContainer() {
  const { favoriteContactList, addFavorite, removeFavorite, checkIsFavorited } = useContext(RoledexContext);
  const onClickFavoriteButton = useCallback(
    (id: string) => () => {
      const favorited = checkIsFavorited(id);
      favorited ? removeFavorite(id) : addFavorite(id);
    },
    [addFavorite, removeFavorite, checkIsFavorited]
  );

  const FavoriteContactCardList = useMemo(() => {
    return favoriteContactList.map((id) => {
      const item = LocalStorageService.shared.getContactWithId(id);
      const favorited = checkIsFavorited(id);
      if (!item) return null;
      return (
        <SimpleFavoriteContactCard
          key={item.id}
          name={item.name}
          email={item.email}
          phoneNumber={item.phoneNumber}
          favorited={favorited}
          onClickFavoriteButton={onClickFavoriteButton(item.id)}
        />
      );
    });
  }, [favoriteContactList, onClickFavoriteButton]);
  return <Container>{FavoriteContactCardList}</Container>;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  max-width: 425px;
  min-width: 320px;
  border: 1px solid ${(props) => props.theme.colors.gray50};
  margin-bottom: 40px;
  overflow: scroll;
`;

export default React.memo(FavoriteContactListContainer);
