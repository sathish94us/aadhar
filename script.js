var selectedFiles;
function ProcessSignIn()
{
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var invalidSignIn = document.getElementById("invalidSignIn");
    if( userName == "username" && password == "password" )
        location.href = "main-page.html";
    else
        invalidSignIn.style.visibility = "visible";
}

function handleEnterKey( event )
{
    if( event.keyCode == 13 )
        ProcessSignIn();
    else
        return;
}

// function FileOpenDialog()
// {
//     var dialog = new ActiveXObject('MSComDlg.CommonDialog');
//     dialog.Filter = 'All Files(*.*)|*.*';
//     dialog.MaxFileSize = 32767;
//     dialog.DialogTitle = 'Select files to upload';
//     dialog.Flags = 0x200|0x80000|0x800|0x4|0x200000;
//     dialog.ShowOpen();
// }

function makeFileList( event )
{
    // var reader = new FileReader();
    // reader.onload = function(e){
    //     console.log(reader.result);
    // }
    // reader.readAsText(event.files[0]);
    // console.log(event.files);
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("GET", event.files[0], true);
    // xhttp.onreadystatechange = function() 
    // {
    //     if (this.readyState == 4 && this.status == 200 || this.status == 0) 
    //     {
    //         console.log(this.responseXML);
    //     }
    // };
    // xhttp.send();
    selectedFiles = event.files;
    document.getElementById("FileVerificationProcess").style.display = selectedFiles.length > 0 ? "flex" : "none";
}

function FileUploadVerification()
{
    if( selectedFiles.length > 0 )
    {
        var mainContainerContent = document.getElementById("FileUploadContainer");
        var mainHeader = document.getElementById("mainPageHeader");
        var fileVerificationContainer = document.getElementById("FileVerificationContainer");
        fileVerificationContainer.style.display = "block";
        mainContainerContent.style.display = "none";
        mainHeader.innerText = "File verification";

        // File verification table process
        var table="<tr><th>S No</th><th>File name</th><th>Status</th><th>Select</th></tr>";
        for( var i = 0; i < selectedFiles.length; i++ )
        {
            table += "<tr" + " onclick=" + '"' + "MouseMove(" + "'" + selectedFiles[i].name + "'" + ")" + '"' + ">" + "<td>" + (i + 1 ) + "</td>" + "<td>" + selectedFiles[i].name + "</td>" + "<td>" + 'V' + "</td>" + "<td>" + 'S' + "</td>" + "</tr>";
        }
        document.getElementById("FileVerificationTable").innerHTML = table;
        console.log(table);
    }
    else
    {   
        return;
    }
}

function MouseMove( event )
{
    console.log(event);
}

function FileVerificationProcess()
{
    var fileVerificationContainer = document.getElementById("FileVerificationContainer");
    var mainHeader = document.getElementById("mainPageHeader");
    fileVerificationContainer.style.display = "none";
    document.getElementById("RecordVerificationContainer").style.display = "block";
    mainHeader.innerText = "Recordlevel verification";
}
