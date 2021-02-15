import { gql } from "@apollo/client";

const RESUME_COMPONENTS = gql`
  {
    user(login: "saviomartin") {
      bio
      avatarUrl
      createdAt
      name
      websiteUrl
      url
      twitterUsername
      isHireable
      location
      hovercard {
        contexts {
          message
        }
      }
      starredRepositories {
        totalCount
      }
      packages {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      pinnedItems(types: REPOSITORY, first: 6) {
        totalCount
        nodes {
          ... on Repository {
            id
            homepageUrl
            languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
              totalCount
              edges {
                node {
                  color
                  name
                }
              }
            }
            name
            nameWithOwner
            primaryLanguage {
              name
            }
            shortDescriptionHTML(limit: 1024)
            stargazers {
              totalCount
            }
            url
            owner {
              ... on User {
                name
              }
            }
            forkCount
          }
        }
      }
      repositories(
        orderBy: { field: STARGAZERS, direction: DESC }
        first: 5
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {
        nodes {
          name
          diskUsage
          id
          homepageUrl
          languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
            totalCount
            totalSize
            edges {
              node {
                color
                name
              }
            }
          }
          nameWithOwner
          primaryLanguage {
            name
          }
          shortDescriptionHTML(limit: 1024)
          stargazers {
            totalCount
          }
          url
          owner {
            ... on User {
              name
            }
          }
          forkCount
        }
      }
      contributionsCollection {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        pullRequestContributionsByRepository(maxRepositories: 5) {
          repository {
            description
            nameWithOwner
            url
          }
          contributions(orderBy: { direction: ASC }, first: 5) {
            totalCount
            nodes {
              pullRequest {
                commits {
                  totalCount
                }
              }
            }
          }
        }
        totalRepositoriesWithContributedPullRequests
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

export default RESUME_COMPONENTS;
