import styled from "styled-components";

type ImagePreviewProps = {
  imageSource: string;
};

export default function ImagePreview({ imageSource }: ImagePreviewProps) {
  const hasImage = imageSource.trim() !== "";

  return (
    <ImageContainer hasImage={hasImage}>
      {hasImage ? (
        <img src={imageSource} alt="Image du produit" />
      ) : (
        <p>Aucune Image</p>
      )}
    </ImageContainer>
  );
}

const ImageContainer = styled.div<{ hasImage: boolean }>`
  border: ${({ hasImage }) => (hasImage ? "none" : "1px solid #e4e5e9")};
  border-radius: 5px;
  width: 215px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: ${({ hasImage }) => (hasImage ? "1px" : "0")};

  img {
    width: 100px;
  }

  p {
    color: #93a2b1;
  }
`;
