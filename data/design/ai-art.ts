import { ICollection } from "../../src/types/types";

const aiArtData: ICollection = {
  name: "AI Art",
  items:
    [
      {
        name: "Lexica",
        description: "A collection of AI generated images",
        url: "https://lexica.art/",
        img: "design/ai-art/lexica.png",
        tags: [
          {
            name: "free"
          }
        ]
      },
      {
        name: "DreamStudio",
        description: "Online AI-Art generator (Stable Diffusion)",
        url: "https://beta.dreamstudio.ai/dream",
        img: "design/ai-art/dreamstudio.png",
        tags: [
          {
            name: "freemium"
          }
        ]
      },
      {
        name: "DALL·E 2",
        description: "Online AI-Art generator",
        url: "https://labs.openai.com/",
        img: "design/ai-art/dalle.png",
        tags: [
          {
            name: "freemium"
          }
        ]
      }
    ]
}

export default aiArtData;