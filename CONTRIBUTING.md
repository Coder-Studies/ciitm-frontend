# Contributing to Our Project

If you want to contribute to this project! Please take a moment to
review our contribution guidelines to help keep the process smooth and
efficient for everyone.

## How to Contribute

We welcome contributions to improve this project! Please follow these
steps to submit your contributions:

### 1. Fork the Repository

Start by forking this repository to your GitHub account. This will
allow you to work on your changes without affecting the original
codebase.

[Watch the video guide](./github/Assets/2025-01-15%2011-47-33.mp4)

### 2. Clone The Fork Repository

Copy The Fork Repo Link Url

<img src="./github/Assets/step2.png" width="100%">

### 2. Open Terminal

- Open Terminal in Linux or Git Bash if You are Using Window and then
  follow these Collond

**Example**

```bash
$ git clone <! Past SSH link Here !>
```

### 3. Create a Branch

- Before making any changes, **create a new branch** for your work. It
  is crucial to name your branch according to the type of change you
  are making. This helps us understand your contribution quickly.

#### Branch Naming Conventions:

We use the following naming convention for branches:

- **bugfix/** for bug fixes
- **feature/** for new features
- **doc/** for documentation updates
- **modified/** for changes related to modifying a page, message, or
  other content
- **other/** for any other types of changes (e.g., refactoring)

### Examples of Branch Names:

- `bugfix/fix-login-error` — Fix for a login error.
- `feature/add-new-payment-method` — Adding a new payment method
  feature.
- `doc/DocName/update-readme` — Updating the README documentation.
- `modified/homepage/update-welcome-message` — Updating the welcome
  message on the homepage.
- `other/refactor-authentication-logic` — Refactoring the
  authentication logic.

#### Steps to Create a Branch:

Once you've forked the repository, follow these steps to create a
branch:

1. **Open your terminal** and navigate to your local copy of the
   repository.
2. **Fetch the latest changes** from the main repository:
   ```bash
   git fetch origin
   ```
3. **Create a new branch** based on the branch you want to modify

   ```bash
   git checkout -b [branch-name]

   ```

   Replace [branch-name] with a descriptive name using one of the
   conventions above.

```bash
   git checkout -b bugfix/fix-login-error
```

4. **Make Your Changes** Make your changes according to the guidelines
   and conventions used in this project. Ensure that your code is
   well-documented and tested (if applicable).

5. **Commit Your Changes**

### Commit Message Guidelines:

When committing changes, follow this format:

- **Bug Fixes**: `fix: [Short description of the fix]`  
  _Example_: `fix: resolve login error on homepage`

- **Features**: `feat: [Short description of the feature]`  
  _Example_: `feat: add new payment method option`

   - **modified/Page_OR_Component_Name/message**
     `modi: [Short description What you modified] `

- **Documentation**:
  `docs: [Short description of the documentation update]`  
  _Example_: `docs: update README with branch naming conventions`

- **Other**: `chore: [Short description of other changes]`  
  _Example_: `chore: refactor authentication logic for clarity`

   ```bash
   git commit -m "feat: add user profile page"

   ```

6. **Push Your Changes**:

- Push your changes to your forked repository:

```bash
git push origin [branch-name]

```

7. **Create a Pull Request**:

- Once your changes are ready, open a pull request (PR) to merge your
  changes into the main repository. Be sure to describe the purpose of
  your changes in the PR description.
