function log(message) {
    $('#log').append($('<p>').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
  }
  function error(message) {
    $('#log').append($('<p>').addClass('dark-red').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
  }
  function waitForReceipt(hash, cb) {
    web3.eth.getTransactionReceipt(hash, function (err, receipt) {
      if (err) {
        error(err);
      }
      if (receipt !== null) {
        // Transaction went through
        if (cb) {
          cb(receipt);
        }
      } else {
        // Try again in 1 second
        window.setTimeout(function () {
          waitForReceipt(hash, cb);
        }, 1000);
      }
    });
  }
  const address = "0xbDb5411a0d58fAe85b506E5972164b80a261B168";
  const abi =  [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "class",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rollno",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "Caste",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "marks",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_aDdress",
          "type": "uint256"
        }
      ],
      "name": "School",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "fInalamount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "studentsAccts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_aDdress",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "nAme",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "cLass",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rOllno",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cAste",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "mArks",
          "type": "uint256"
        }
      ],
      "name": "setStudentinfo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_address",
          "type": "uint256"
        }
      ],
      "name": "Name",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_address",
          "type": "uint256"
        }
      ],
      "name": "Class",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "class",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_address",
          "type": "uint256"
        }
      ],
      "name": "Rollno",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "rollno",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_address",
          "type": "uint256"
        }
      ],
      "name": "Castes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "Caste",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_address",
          "type": "uint256"
        }
      ],
      "name": "Marks",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "marks",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_address",
          "type": "uint256"
        }
      ],
      "name": "Totall",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "total",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "countStudent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getamount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
   $(function () {
    var College;
   
     $('#trackinfo').click(function (e) {
      e.preventDefault();
      College.Name.call(document.getElementById("trackstudent").value, function (err, re) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("Name").innerHTML = re ;
      });
    });
     $('#').click(function (e) {
      e.preventDefault();
      College..call(document.getElementById("trackstudent").value, function (err, resul) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("Class").innerHTML = resul ;
      });
     });
     $('#').click(function (e) {
      e.preventDefault();
       College.Rollno.(document.getElementById("trackstudent").value, function (err, resu) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
       document.getElementById("Rollno").innerHTML = resu;
      });
    });
    $('#').click(function (e) {
      e.preventDefault();
      College.Castes.call(document.getElementById("trackstudent").value, function (err, resul) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("Caste").innerHTML = resul ;
      });
     });
     $('#').click(function (e) {
      e.preventDefault();
      College.Marks.call(document.getElementById("").value, function (err, resul) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("Marks").innerHTML = resul ;
      });
     });
     $('').click(function (e) {
      e.preventDefault();
      College.Totall.(document.getElementById("trackstudent").value, function (err, resul) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("Fee").innerHTML = resul ;
      });
     });
     $('#Student').click(function (e) {
      e.preventDefault();
      College.countStudent.call( function (err, result1) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("counts").innerHTML = result1;
      });
    });
    $('#createAsset').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      College.setStudentinfo. (
      document.getElementById("address").value,
      document.getElementById("name").value,
      document.getElementById("").value,
      document.getElementById("rollno").value,
      document.getElementById("").value,
      document.getElementById("marks").value,
      function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Transaction succeeded.");

        });
      });
    });
    
    if (typeof(web3) === "undefined") {
      error("Unable to find web3. " +
            "Please run MetaMask (or something else that injects web3).");
    } else {
      log("Found injected web3.");
      web3 = new Web3(web3.currentProvider);
      ethereum.enable();
      if (web3.version.network != 4) {
        error("Wrong network detected. Please switch to the Rinkeby test network.");
      } else {
        log("Connected to the Rinkeby test network.");
        College = web3.eth.contract(abi).at(address);
        }
    }
  });
