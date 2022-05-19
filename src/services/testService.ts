import { graphql, useStaticQuery } from 'gatsby';

interface QueryResponse {
  allDumpYaml: {
    edges: Array<{
      node: {
        output: string;
        tag: string;
        code: string;
      }
    }>
  }
}

class TestService {

  tests: Array<{
    node: {
      output: string;
      tag: string;
      code: string;
    }
  }>;

  counter = 0

  constructor () {

    const result: QueryResponse = useStaticQuery(graphql`
      query IndexPage {
        allDumpYaml {
          edges {
            node {
              output
              tag
              code
            }
          }
        }
      }
    `)
    
    this.tests = result.allDumpYaml.edges;
    this.counter = Math.trunc(Math.random() * 1000 % this.tests.length);
  }

  next() {
    this.counter = Math.trunc(Math.random() * 1000 % this.tests.length);
  }

  getTest() {
    let test = this.tests[this.counter].node.code;
    
    test = "\n\n" + test.split("\n").map(codeLine => {
      return "\t" + codeLine;
    }).join("\n") + "\n\n"

    return test;
  }

}
export const testService = new TestService();