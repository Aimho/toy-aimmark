import React from "react";
import { useRecoilValue } from "recoil";
import { useSnackbar } from "notistack";

import { Skeleton } from "@material-ui/lab";
import {
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import {
  useDeleteItemMutation,
  useGetUserItemQuery,
} from "../../generated/graphql";
import { initRender } from "../../recoils/renderState";
import { userProfile } from "../../recoils/userState";
import { faviconImgProps, getBaseUrl, openUrl } from "../../utils";
import { MuiCircleProgress, MuiClose } from "./style";
import { BookmarkButton } from "../../styles/customStyles";
import DetailBookmarkAddDialog from "./DetailBookmarkAddDialog";

interface Props {
  ownerId: string;
}

const DetailBookmark = ({ ownerId }: Props) => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const { enqueueSnackbar } = useSnackbar();
  const { data, error, refetch } = useGetUserItemQuery({
    variables: { user_id: ownerId },
  });

  const { id } = useRecoilValue(userProfile);
  const isInit = useRecoilValue(initRender);
  const isOwner = id === ownerId ? true : false;

  const [deleteItem, { loading }] = useDeleteItemMutation();
  const onDeleteBookmark = (name: string, id: string) => {
    if (!isOwner) return null;
    deleteItem({ variables: { id } })
      .then(() =>
        enqueueSnackbar(`${name} 북마크 삭제되었습니다.`, {
          variant: "success",
        })
      )
      .catch(() =>
        enqueueSnackbar(`${name} 북마크 삭제 실패하였습니다.`, {
          variant: "error",
        })
      )
      .finally(refetch);
  };

  if (error?.message) {
    enqueueSnackbar(
      `북마크 데이터를 불러오는데 실패하였습니다. 잠시 후 다시 시도해주세요`,
      { variant: "error" }
    );
  }

  const bookmarks = data?.item;

  const EmptyContent = () => {
    if (bookmarks?.length === 0) {
      return (
        <Typography variant="body2" align="center" style={{ marginTop: 32 }}>
          등록된 북마크가 없습니다
        </Typography>
      );
    }
    return null;
  };

  const BookmarkContent = (name: string, baseUrl: string) => {
    if (!isInit) {
      return (
        <React.Fragment>
          <Skeleton variant="rect" width={24} height={24} animation="wave" />
          <Skeleton variant="text" width="100%" height={18} animation="wave" />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <img alt={name} {...faviconImgProps(baseUrl)} />
        <p>{name}</p>
      </React.Fragment>
    );
  };

  const AddBookmark = () => {
    if (!isOwner) return null;
    return (
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <DetailBookmarkAddDialog onCloseCallBack={refetch} />
      </Grid>
    );
  };

  return (
    <Container component="main" maxWidth="md">
      <Grid container spacing={2}>
        <EmptyContent />
        {bookmarks?.map((item, index) => {
          const baseUrl = item.base_url ? item.base_url : getBaseUrl(item.url);

          const DeleteButton = () => {
            if (!isOwner) return null;

            const onDelete = (
              e: React.MouseEvent<SVGSVGElement, MouseEvent>
            ) => {
              e.preventDefault();
              e.stopPropagation();
              if (window.confirm(`${item.name} 북마크를 삭제하시겠습니까?`)) {
                onDeleteBookmark!(item.name, item.id);
              }
            };

            if (loading) {
              return <MuiCircleProgress className="close-button" size={16} />;
            }
            return <MuiClose className="close-button" onClick={onDelete} />;
          };

          const gridItemStyle = () => {
            const grow = Math.floor(item.name.length / 10) + 1;
            return {
              flexGrow: grow,
              maxWidth: matchesMobile ? "auto" : "345px",
            };
          };

          return (
            <Grid item key={index} style={gridItemStyle()}>
              <BookmarkButton onClick={() => openUrl(item.url)} disableRipple>
                <DeleteButton />
                {BookmarkContent(item.name, baseUrl)}
              </BookmarkButton>
            </Grid>
          );
        })}
        <AddBookmark />
      </Grid>
    </Container>
  );
};

export default DetailBookmark;
