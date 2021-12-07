import styles from "styled-components";
import tw from "twin.macro";

export const StyledLanguageSelector = styles.select.attrs({
  className: "styled-language-selector",
})`
    ${tw`w-96 h-8 rounded mt-8 max-w-full`}
`;
