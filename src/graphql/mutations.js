/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContactForm = /* GraphQL */ `
  mutation CreateContactForm(
    $input: CreateContactFormInput!
    $condition: ModelContactFormConditionInput
  ) {
    createContactForm(input: $input, condition: $condition) {
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
export const updateContactForm = /* GraphQL */ `
  mutation UpdateContactForm(
    $input: UpdateContactFormInput!
    $condition: ModelContactFormConditionInput
  ) {
    updateContactForm(input: $input, condition: $condition) {
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
export const deleteContactForm = /* GraphQL */ `
  mutation DeleteContactForm(
    $input: DeleteContactFormInput!
    $condition: ModelContactFormConditionInput
  ) {
    deleteContactForm(input: $input, condition: $condition) {
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
export const createPosts = /* GraphQL */ `
  mutation CreatePosts(
    $input: CreatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    createPosts(input: $input, condition: $condition) {
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
export const updatePosts = /* GraphQL */ `
  mutation UpdatePosts(
    $input: UpdatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    updatePosts(input: $input, condition: $condition) {
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
export const deletePosts = /* GraphQL */ `
  mutation DeletePosts(
    $input: DeletePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    deletePosts(input: $input, condition: $condition) {
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
