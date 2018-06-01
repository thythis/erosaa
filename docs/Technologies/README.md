## Async function
### example
``` javascript
async componentDidMount() {
    try {
        const response = await 
            fetch(`https://api.github.com/repos/facebook/react/stargazers`);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        this.setState({ data: json });
    } catch (error) {
        console.log(error);
    }
}
```
### babel config
.babelrc
``` javascript
{
    "presets": [
      ["env", {
        "targets": {
          "browsers": ["last 2 Chrome versions"]
        }
      }], "react"
    ]
}
```
