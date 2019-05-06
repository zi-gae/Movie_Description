import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:6.5em;
        
    }
`;

export default globalStyle;

// reset => 컴포넌트 기본 속성을 reset 하고 시작함
