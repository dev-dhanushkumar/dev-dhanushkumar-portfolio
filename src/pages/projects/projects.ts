import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Spring-Boot-SignUp-Login-API',
    description: 'Signup and Login simple Authentication API in spring boot',
    demoLink: 'https://github.com/dev-dhanushkumar/Spring-Signup-Login-API',
    tags: ['Spring-Boot']
  },
  {
    name: 'Rust-WARP-Cookie-Based-Authentication',
    description: 'Get Current user information using Cookies',
    demoLink: 'https://github.com/dev-dhanushkumar/Rust-WARP-Cookie-Based-Authentication',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Rust']
  },
  {
    name: 'Leptos-Dashboard-App',
    description: ' full-stack Rust Dashboard App with Rust🦀! Leveraging on Leptos, Actix Web and SurrealDB!',
    demoLink: 'https://github.com/dev-dhanushkumar/leptos_dashboard_app',
    tags: ['Leptos', 'Rust']
  },
  {
    ...(await getRepositoryDetails('devaradise/paradise-ui')),
    name: 'Go-BookStore-API',
    description: 'To create book API operation using Golang',
    demoLink: 'https://github.com/dev-dhanushkumar/Go-BookStore-API',
    // postLink: 'https://devaradise.com/how-i-build-paradise-ui-react-component-library/',
    tags: ['Golang', 'REST API']
  },
  {
    ...(await getRepositoryDetails('syakirurahman/react-lab')),
    name: 'JS-WebRTC-Video-Chat',
    description: 'JS WebRTC Video Chat App',
    demoLink: 'https://github.com/dev-dhanushkumar/JS-Small-Projects/tree/main/js-WebRTC-Video-Chat',
    tags: ['Javascript']
  },
  {
    ...(await getRepositoryDetails('syakirurahman/pokemon-catcher')),
    name: 'Golang-ToDo-List-CLI-Tool',
    description:'command-line tool designed to help you manage your daily tasks efficiently',
    demoLink: 'https://github.com/dev-dhanushkumar/Golang-Projects/tree/main/golang_task',
    postLink: 'https://dev.to/dev-dhanushkumar/mytask-todo-cli-tool-2kej',
    tags: ['CLI', 'Golang']
  },
  // {
  //   ...(await getRepositoryDetails('syakirurahman/movie-nominations')),
  //   name: 'Movie Nominations',
  //   demoLink: 'https://movie-nominations-c21c3.web.app/',
  //   tags: ['Hobby']
  // },
  // {
  //   ...(await getRepositoryDetails('syakirurahman/organization-tree')),
  //   name: 'Organization tree',
  //   demoLink: 'https://organization-tree-2a446.web.app/',
  //   tags: ['Hobby']
  // }
]
