/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContactForm = /* GraphQL */ `
  subscription OnCreateContactForm(
    $filter: ModelSubscriptionContactFormFilterInput
  ) {
    onCreateContactForm(filter: $filter) {
      id
      Name
      Email
      Subject
      Message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateContactForm = /* GraphQL */ `
  subscription OnUpdateContactForm(
    $filter: ModelSubscriptionContactFormFilterInput
  ) {
    onUpdateContactForm(filter: $filter) {
      id
      Name
      Email
      Subject
      Message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteContactForm = /* GraphQL */ `
  subscription OnDeleteContactForm(
    $filter: ModelSubscriptionContactFormFilterInput
  ) {
    onDeleteContactForm(filter: $filter) {
      id
      Name
      Email
      Subject
      Message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onCreatePosts(filter: $filter) {
      id
      title
      content
      summary
      state
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onUpdatePosts(filter: $filter) {
      id
      title
      content
      summary
      state
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($filter: ModelSubscriptionPostsFilterInput) {
    onDeletePosts(filter: $filter) {
      id
      title
      content
      summary
      state
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
