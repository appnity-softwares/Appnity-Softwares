import avatar from "../assets/avatar.png";
export const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Lead Designer",
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAswMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xAA9EAABAwMCAggFAgQDCQAAAAABAAIDBAUREiEGMQcTIkFRYXGBFDKRobFCUiNicsEz0fAVJCVDVIKiwtL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQEBAAICAQQDAQAAAAAAAAAAAQIRAxIxBCFBURMiMhT/2gAMAwEAAhEDEQA/ALxREQEREBERAREQcHYJkqBce9IUdhD6CztZV3Xk4E5ZB5uxzP8AL9VUFbxBe7lOZbld6qZzubNT42DyDWvwPXBKrcpFpha+irrf7VadrjX08D9sRueNZzyw0bn6KIWrpTtdVdq2nqm9TRMlLaaqaC4OaNiXjmMkEg8sc91TYqpH1TZ6iSaUxYZiWd0mjOScF3IbBeWgRzGPk752ObtlviqXOtZxT5fT1uutvukfW22tp6pneYZA7HrjkswHPcvmKlrqqmmjmifrdGctyMuHoeY9RurE4a6RamnjhdXt+IonuEcri8a6cnADgT8zScAgnIJ5kHAnHkl9qjLhsm4tpFi22vprlSioo5RLGSWkjm1wOC0juIIIIKyloxEREBERAREQEREBERAREQEREDKrTpQ48pLZS1Nnt1VN/tU9h/VHR1ORzJxnODkAfVWJWCY00opS0T6D1ZcMgOxtkeGV8xcZXmovt/nrLzTMp6uAfDywRtIa0tPI9538VFulsJutQyMzM1TvcY3b4JyZPPwHr3ruyWhi7IpYsDvDMke68ZJnv7I7Orl5DwWVb7TcK8EW2ny0HDp5Dpbn171lvXlvJb4A6Mamtz1chON9yM5BGe8bfRciZzAI5o+sY05aWc2+Yxu0rPl4UvMNO+TrIJMDLomuJLvLGN10oeFb1XlodSNh8DI/cewyq9sftfpn9PFtQNBe1wljxk42cP7H7ei2Vpeyf4qHOYpYHOJzjbGCffIWfF0fXeMGRlZCX43a6Fzfvk/haWaGv4elko6yAxTyAEv5tLMn5fHJyqW45eKvjMsPK8ei6KVlkfJMDqk6rJPe5sbQT9A0eymqg3RbcaustRp6iPTDHEySLV83aLs58ckas/zKcjkurHw4s/6oiIpVEREBERAREQEREBERAREQcEZVJ9P1ojhq7beYW5klzDK0ADOBkO8z3bq7VW3TpSddwtTVA5wVQ+7XD+wUXwnHyqThCyMurpampLmQRO0ljT2nnHee4fdWvb7JD8JFqPVs0jTEwABo7h9FCuj2j6q2/ETvDI6mXUNRwGsb2dR9cH2Vj01fQ1LM0tZTStG3Yma7+687mtuV+nrcOMxwn3XWO3UcQz1QPdl5Xs1+G6IGxuA7hJj8ArtJFC8Bz44352yWgrzFNSOL/wDdoewcH+GNu9YNdvZheQdcen/uyFEululAorFcIXhk5nNMScHLS0u3B54LPupNPV0VE0fEVVNABy1yNb+Vg8Y2uPiDg5lTTyNe6ikFVDJGdQezHaG3i0n3AW/D/Tn9RfaPboviEU1Ucuc+WlidI5x3Lmvkbv7KwlA+jKJ5NbO4YDoomgeeqR3/ALBTscgu/j/iPP5td7pyiIrsxERAREQEREBERAREQEREHBVedLN1t9Twvd7RrldVxMZJ2IXOa17S2QNLhsCQPYOCsMqneM43wXy+R6SckyZ/cx0bT/8AQHmFTky6zbTiwmeWmlqbXHW8P2q3z1D46VtPGZQzGqUgZAz3b7qK3CxW+C4UdNDaJpvii3QPiTrAO2SAMjzBwRjdWVZqWOokoWPe4MbAw6Qfmw0bKUPi1/NJLg/pbIQPzuuHHm62x6OfFMpNITwTYqGx3OT4dk7HzgsEbpSWsI3OB3kgHc93qvTj2xUF4qIX1PxJ6oZc1j8MecbA+eO/zC3LWMZxAGxNwI3AYHjpGfsVvZIYnRPc9rcdknPsP8lTtl27fK9wxk6/ClrTw3bX36W3VPDlQ9kYLjIK1zTsM7bc+7v35K3eELHRWWmq6C2Vc0lvqoi4U051Op3kdoZ8CDyPIjzWTBH1TSzDfLZZlsb/AMRjcDgnOd9j7LX89ysjny9PMZa0fR1d6OktQilE7TJM2MymJ3VghrWAavUHdWGqasUZnore1oLgZRHDg40h0mSfU7q5QMABdfHluOTlx62X7coiLRkIiICIiAiIgIiICIiAiIg4VfdIFucy7wXJoGioiFM892puotB9Q530A71YSx6+jp66klpquBk0MjcOjeMg94++Cq5Y9pqr8edwy7RS3CteZLdSyB/8SDELhnOCzsn6gZ91O5Z2sgdPzaG5Hn4KhLbd5LLe6tuHfDmokD2A/LhxH1UgvXEdy4mkgslhD3Rxxl8jo3YMgG/PwAIHmVxZ8N7vSx5p0iVwcR0lsuMkl0laJZnODiHtyMu7OBnPyho5eKyp+LrXW1M1vppmNe9mlz3yiPBzkbHmoLbuGXMY19TPLq27FPGGge53P291lVnCplD5aOWphkO4ErQ5pPpsVTfDL5X6c1x31WhbpnPi0SEOez9Y5Ob3FY3El5ZYrHX1znDrI4HNjGcEvds0fUqqLPcblwVeqc3GMtp5WnVGD2XtJ3djuIO/msLjLiSS/wBUBkikhJcwYxqO41fnHqr48P7y/DLLlnSz5W5wVbXPksUWvrBS0kc8jwdg3RhmfNztx5Md4qzAo/wHRwU3CNpfHA2OWoo4ZZiNy55jbkk9/cPQBSHGF24Y9Zp5+effLYiIrKCIiAiIgIiICIiAiIgIiIC4yPFCd1VfHfSo6118lssEUUssWRLVSdoNcOYa3vx4k48iidK76X+Hp7HxhUzhh+CuB6+J4bhoJ+ZnqCM+hUestVVWS4QV9LpD2u5k5BzzafUKUw1Fy41qKpt+rpZAyPMLSBpidqacgYxuMjxwSohXGakqpqOqZpdE8Asx9PbkR6rO2W2N5MpjK3t+4xuVdWumo3mki22YAXZwM5JG+68bXxfeaGsjmnqTURN3Mb2NAIzvyHNaTrgQQAMFdnTN0kFg71XpjrWl/wAvJve2dfbrLfbnLVzDHWOy1mc6G8gMrvwbYJuJ+J6W0xA9TkSVDg3OiJpGon7D3WrDpJ5WQ07C+SQhrWtG7j3YU4r7LV8F2i0VUFXJHcaieUzyRPLC3ss7GRzAx6Eq01jqKZbstr6LYA1oA2A5Lsqw4H4/kqmsgu0weW4EjpMBze7XkbObvuNiOe45WaCMAK7CzTsiIpQIiICIiAiIgIiICIiAixq6tprfSvqa6oip4Ixl0krg1o9yq54j6W6WAup+HaU1kn/Uz5ZEPQfM/wCw80Ep6RL6eH+FK6tieGVDmdVA49z3bavYZd7L5woYDK588uDnBGp2T7rb3S8XDia+QOu1U6eXT2WnaOMZzhrRsPXntzWvu7Pg31AZ8rmZjdyznACrWmMSbg8OLquoGnqHsa2Nw5vAcQ4+x/CyuJOHYb3CHNc2GqYOzLpzqH7XeX4WVw4yI2KgfFnSaWNp+m4+pKz2tPayfm39CvPz5LM7lHq4cc/HMaqGvt1bapOrroDH4OzkP9F0oaWquc7ILfA+eVxxpaOXNXNTUzqx7GsYHOG+T+k+KkFDb4aBpm0h05ABfjf0HutP9Pt4Y300l8onwJwE2yFtzurmy1oGWNA7EHjv3ux3rI6TaOW5WG3iAATwTyz6SPmGj5fXG3sppN2h1exA2cR3nvWvvEbXUYc8Zcxw078idvws5y5TPsteLG4aUpQ1bmuiqaY9puHAHkdtwR9iF9AdHV4F14fjaXFz6XERLjk6cAtz4nG2e/C+cad7dc7GfJ8S/R/TvhS7hK71Vuu9A6mqqmFtRL8LKINJL87syHbHByMbfMvQjzso+i0UWt/ElVHK+mucAnkiGXyUjHCTHi6A5e0ebS8ea39uuFJcqcVFBUxVEJONcTgQD3g+B8lZmykREBERAREQEREBaHjOrvFDY56mwxQSVMe7uuBOlve4AcyOeFvlxhB851rau8VTKu+V01dOD2NZwxmf2jkPUAe619bTsiq3xCLsBwaTq5EgclZfHXCbrfLJdLazVRuy6aJo/wAE95H8v4/Fd3WpDagOLA4uYN+7P+sKjX49mDbYAy+y5JOiEYPuf8158Q721jiN45urd9cj8ArybUviqGVn6m/OPJe99xJQTuZuyZjZR/U1wB/8fwnymeHtwbfhQN+CrCPhXPyyU/8ALJ5+xP0KtKktDpWNlme0ROAI0nOoHzVF0eRDkePjhSGwcUXSx4jopw+nBz8PK3U0eOBzHssOX0/a7xdHF6m4/rkt8SRW6r6hw0wyt1tPg4bHP2XEdWK65sjj/wACAdaSf1v5N28PmPq0Kvp+kVtcxjai1MbJGTh8VTkHPMYLdu48zyXWm6RHUAl6i1Rl0uO1LU4xjyDd+fisPwcn03vPx2eVqjJ5ZyoB0hcVQsiNqtsrJZyT172uyI+7Tkc3b+yil54xvd3jdFLUdRTu2MdO3RkeBPMhR4bAAbADAA5Ba8XptXeTDl9Tv2xdaTaqlwNgM/6+63lCXNMDm/M2upyz16wLS0Halmd4u/ClnCVCbjxRZbe1vZFQKmU/07gfb8Lqcr6EuFvpLixrKynZLoOphcMOYfFp5g+YUereFamKpNba6t5qNOkukfomcByHWgHUBvtI1/PuUs5LlWZsW2Nq2UMQr5RLUY7bhGGexAJGR5bLKREBERAREQEREBERBwWjGOfkqw4+6On1bH13D7W625c+jO2r+g93orQO6KEy6fKUsUlPPJFPG6OWM6XxyNwWO8CF2iYamlmoC7SS0uhdz3xgj6Ej0K+jeJeE7RxGzFwph1wbhtRH2ZG+/f6HZVVf+iq+W9/X2eaO4MYdbMfw5R5YJwfXI9FGlpkq6iJ6ojcFpOVkEAjcA+q9LjS1Nuuc0FfSzUb3nW2OdhYd+eM89yeS885UgQTzcT6nP5XLSW/KdPoMLhEDO/iuHnDHHwCHA3WdabHc7/llpoamqbyL42djnyLz2fbOUHSzQsbTCaUO0HLzvz7gFb3QzZ3ONXfakbu/gQeB/e4fZvlgrFsnRJNO2E36sbDBGATTU27nHGMl/wCnbbAB58wrUttBTWyhhoqKIRwQsDGNHcE0i1k4XKIpVEREBERAREQEREBERAREQFwiIPOop4amF0VREyWM82SNDgfUFR+r4D4WrSXTWSkDj3xs0fhEUDVS9EvCLyXfCVLfJtXIB+V2p+ijhGEh3wM7/KSpkcPuURSNxR8HcN24h1LZaIO/c+IPP3yt+0BoAaMADAA5BEUDlERSCIiAiIgIiICIiD//2Q==",
    bio: "Alex is a creative powerhouse, transforming complex ideas into stunning, user-friendly designs. He believes that great design is not just about aesthetics, but also about solving problems.",
    skills: ["UI/UX Design", "Prototyping", "Branding", "Figma"],
    socials: [
      { icon: "fa-brands fa-x-twitter", url: "#" },
      { icon: "fab fa-dribbble", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "Frontend Developer",
    imageUrl: "https://img.sanishtech.com/u/292e6274c1a4a46e3d0b4594d804fa2f.png",
    bio: "Maria brings designs to life with clean, efficient, and responsive code. She has a passion for web performance and is always exploring new frontend technologies.",
    skills: ["React", "Vue.js", "Tailwind CSS", "JavaScript"],
    socials: [
      { icon: "fa-brands fa-github", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    id: 3,
    name: "James Smith",
    role: "Project Manager",
    imageUrl: "https://img.sanishtech.com/u/93d9bc8edb23ac49e4b399ac76819a9e.png",
    bio: "James is the organizational backbone of our team. He ensures that projects are delivered on time and within budget, while maintaining clear communication with clients.",
    skills: ["Agile Methodologies", "Client Relations", "Risk Management", "Jira"],
    socials: [
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
    {
    id: 4,
    name: "Alex Johnson",
    role: "Lead Designer",
    imageUrl: "https://img.sanishtech.com/u/b59fc21d4e25d4f0d74c0af380d1d88d.png",
    bio: "Alex is a creative powerhouse, transforming complex ideas into stunning, user-friendly designs. He believes that great design is not just about aesthetics, but also about solving problems.",
    skills: ["UI/UX Design", "Prototyping", "Branding", "Figma"],
    socials: [
      { icon: "fa-brands fa-x-twitter", url: "#" },
      { icon: "fab fa-dribbble", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    id: 5,
    name: "Maria Garcia",
    role: "Frontend Developer",
    imageUrl: "https://img.sanishtech.com/u/292e6274c1a4a46e3d0b4594d804fa2f.png",
    bio: "Maria brings designs to life with clean, efficient, and responsive code. She has a passion for web performance and is always exploring new frontend technologies.",
    skills: ["React", "Vue.js", "Tailwind CSS", "JavaScript"],
    socials: [
      { icon: "fa-brands fa-github", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    id: 6,
    name: "James Smith",
    role: "Project Manager",
    imageUrl: "https://img.sanishtech.com/u/292e6274c1a4a46e3d0b4594d804fa2f.png",
    bio: "James is the organizational backbone of our team. He ensures that projects are delivered on time and within budget, while maintaining clear communication with clients.",
    skills: ["Agile Methodologies", "Client Relations", "Risk Management", "Jira"],
    socials: [
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
];
