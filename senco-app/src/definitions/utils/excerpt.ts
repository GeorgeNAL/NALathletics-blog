const formExcerpt = (content: string, excerptSize: string = "small"): string => {
    let characterCount;

    switch(excerptSize) {
        case "small":
            characterCount = 90;
            break;
        case "medium": 
            characterCount = 120;
            break;
        case "large":
            characterCount = 180;
            break;
        default: 
            characterCount = 180;
    }

    const contentNoTitle: string = content.replace(/ <h1>.*<\/h1>/g, "");
    const contentNoHeaderTags: string = contentNoTitle.replace(/<h.>/, "").replace(/<\/h.>/, "");
    const firstNinetyCharactersArray: string[] = contentNoHeaderTags.slice(0, characterCount).split(" ");
    // Remove last item to avoid including a cutoff word in excerpt
    firstNinetyCharactersArray.pop();

    const excerptString: string = firstNinetyCharactersArray.join(" ") + "...";
    return excerptString;
};

export default formExcerpt;