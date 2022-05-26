import { graphql, useStaticQuery } from 'gatsby';

interface QueryResponse {
  allYaml: {
    edges: Array<{
      node: {
        output: string;
        tag: string;
        code: string;
      }
    }>
  }
}

class GetRandomCodeService {

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
        allYaml {
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
    
    this.tests = result.allYaml.edges;
  }

  next() {
    this.counter = Math.trunc(Math.random() * 1000 % this.tests.length);
    return this.tests[this.counter].node.code;
  }
}

export const getRandomCodeService = new GetRandomCodeService();