const RESUME_COMPONENTS = `
  bio
  avatarUrl
  name
  websiteUrl
  url
  email
  twitterUsername
  isCampusExpert
  isDeveloperProgramMember
  location
  hovercard {
    contexts {
      message
    }
  }
  followers {
    totalCount
  }
  topRepositories(orderBy: {field: STARGAZERS, direction: DESC}, first: 6) {
    edges {
      node {
        primaryLanguage{
          name
          color
        }
        name
        stargazers{
          totalCount
        }
        stargazerCount
        url
      }
    }
  }
  pinnedItems(types: REPOSITORY, first: 6) {
    totalCount
    nodes {
      ... on Repository {
        id
        homepageUrl
        languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
          totalCount
          
        }
        name
        primaryLanguage {
          color
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
  repositories{
    totalCount
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
`;

export default RESUME_COMPONENTS;
