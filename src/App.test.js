import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import '@testing-library/jest-dom';


import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Header from "./Header";
import EmojiResultsRow from "./EmojiResultRow";
import SearchInput from "./SearchInput";
import filterEmoji from "./filterEmoji";



describe("Emoji Search Tests", () => {

  let input, emojis;

  test('header render', () => {
    beforeEach(() => {
      render(<Header />);

    })
  })

  test('emoji list render', () => {
    beforeEach(() => {
      render(<EmojiResultsRow />);

    })
  })

  test('emoji filter render', () => {

    input = screen.getByPlaceholderText("Please Enter The Emoji")
    const emojiName = 'Joy'
    const joyElement = screen.getByText(emojiName)
    userEvent.type(input, emojiName);
    expect(joyElement.toBeInDocument)

  })

  test('copy an emoji ', () => {

    beforeEach(() => {
      emojis = screen.getAllByText('Click to copy emoji')
    })

    userEvent.click(emojis[0].parentElement);

  })


})


