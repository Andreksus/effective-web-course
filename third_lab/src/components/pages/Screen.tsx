import styled from "styled-components";
import {FC} from "react";
export const Screen: FC = () => {
    const numb = 1562;
    return (
        <div>
            <UpScreen>
                <Title>Characters</Title>
                <ArrayCards>({numb})</ArrayCards>
            </UpScreen>
            <SearchCharacters>
                <Input placeholder='Search for characters by name' type="text"/>
                <Button>SEARCH</Button>
            </SearchCharacters>
            <Line></Line>
        </div>

    );
}

const UpScreen = styled.div`
  display: flex;
`

const Title = styled.h1`
  padding-left: 2%;
  font-weight: bolder;
  font-size: 40px;
  font-family: Calibri;
  opacity: 90%;
`

const ArrayCards = styled.h1`
  padding: 18px 0 0 10px;
  opacity: 60%;
  font-weight: bold;
`

const SearchCharacters = styled.div`
  padding-left: 2%;
  padding-bottom: 20px;
  margin-top: -15px;
  display: flex;
  padding-bottom: 0;
`

const Input = styled.input`
  width: 1450px;
  height: 40px;
  font-size: 20px;
  padding-left: 15px;
  opacity: 60%;
`

const Button = styled.button`
  margin-left: 2%;
  width: 280px;
  border: 0;
  background: #efad4d;
  color: white;
  font-size: 18px;
`

const Line = styled.hr`
  margin: 25px 46px 25px 2%;
  opacity: 40%;
`