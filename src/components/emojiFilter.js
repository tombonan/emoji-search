import emojiList from "../json/emoji.json";

export default function emojiFilter(inputText, numResults) {
    return emojiList
        .filter(emoji => {
            if (emoji.title.toLowerCase().includes(inputText.toLowerCase())) {
                return true;
            } else if (emoji.keywords.includes(inputText.toLowerCase())) {
                return true;
            }
            return false;
        })
        .slice(0, numResults);
}
