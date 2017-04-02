var server = require('http');
    express = require('express'),
    formidable = require('formidable'),
    LineReader = require('linereader'),
    fs = require('fs'),
    path = require('path'),
    app = express();
var port = process.env.port || 3000;
app.use(express(__dirname + '/public'));

app.get('/' , function(req , res){
     fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

// Handling form upload...
app.post('/upload' , function(req, res){
     var form = new formidable.IncomingForm();
     form.parse(req, function(err , fields , files){
         readInputFile(req, res ,files);
     });
});

// Logic For Converting the digital number to regular form..............

function readInputFile(req, res , files){

       var  old_path = files.file.path,
            file_size = files.file.size,
            file_ext = files.file.name.split('.').pop(),
            index = old_path.lastIndexOf('/') + 1,
            file_name = old_path.substr(index);
            var lr = new LineReader(file_name);
            var print;
            var map=[], map2=[];
            var arr1=[],arr2=[],arr3=[];
            var i1=0,i2=0,i3=0;
            var result = "";
            lr.on('line' , function(lineno, line) {  
                    print = "";
                    var c =0;
                    if((lineno) %4!=0){
                    for(var i= 0; i < line.length; i++){
                        
                            if((lineno)%4==1){
                                
                                arr1[i1++]=line[i];           
                            }
                            else if((lineno)%4==2){
                                
                                arr2[i2++]=line[i];   
                                }
                            else if((lineno)%4==3){
                                
                                arr3[i3++]=line[i];
                                } 
                     }
                }
                      //console.log("out of loop  " + lineno);
                     if((lineno)%4==3)
                     {
                             var ans="";
                             for(var k1=0 ; k1 < i1; k1=k1+3){

                                 // For case 0
                              if(arr1[k1]==' ' && arr1[k1+1]=='_' && arr1[k1+2]==' ' && 
                                 arr2[k1]=='|' && arr2[k1+1]==' ' && arr2[k1+2]=='|' &&
                                 arr3[k1]=='|' && arr3[k1+1]=='_' && arr3[k1+2]=='|'
                                 ){
                                     ans=ans+"0";
                                 }

                                 //For case 1
                                 if(arr1[k1]==' ' && arr1[k1+1]==' ' && arr1[k1+2]==' ' && 
                                 arr2[k1]==' ' && arr2[k1+1]==' ' && arr2[k1+2]=='|' &&
                                 arr3[k1]==' ' && arr3[k1+1]==' ' && arr3[k1+2]=='|'
                                 ){
                                     ans=ans+"1";
                                 }
                               
                                 // For case 2
                                 if(arr1[k1]==' ' && arr1[k1+1]=='_' && arr1[k1+2]==' ' && 
                                 arr2[k1]==' ' && arr2[k1+1]=='_' && arr2[k1+2]=='|' &&
                                 arr3[k1]=='|' && arr3[k1+1]=='_' && arr3[k1+2]==' '
                                 ){
                                     ans=ans+"2";
                                 }

                                 // For case 3
                                 if(arr1[k1]==' ' && arr1[k1+1]=='_' && arr1[k1+2]==' ' && 
                                 arr2[k1]==' ' && arr2[k1+1]=='_' && arr2[k1+2]=='|' &&
                                 arr3[k1]==' ' && arr3[k1+1]=='_' && arr3[k1+2]=='|'
                                 ){
                                     ans=ans+"3";
                                 }

                                 // For case 4
                                 if(arr1[k1]==' ' && arr1[k1+1]==' ' && arr1[k1+2]==' ' && 
                                 arr2[k1]=='|' && arr2[k1+1]=='_' && arr2[k1+2]=='|' &&
                                 arr3[k1]==' ' && arr3[k1+1]==' ' && arr3[k1+2]=='|'
                                 ){
                                     ans=ans+"4";
                                 }

                                 //For case 5
                                 if(arr1[k1]==' ' && arr1[k1+1]=='_' && arr1[k1+2]==' ' && 
                                 arr2[k1]=='|' && arr2[k1+1]=='_' && arr2[k1+2]==' ' &&
                                 arr3[k1]==' ' && arr3[k1+1]=='_' && arr3[k1+2]=='|'
                                 ){
                                     ans=ans+"5";
                                 }

                                 //For case 7
                                 if(arr1[k1]==' ' && arr1[k1+1]=='_' && arr1[k1+2]==' ' && 
                                 arr2[k1]==' ' && arr2[k1+1]==' ' && arr2[k1+2]=='|' &&
                                 arr3[k1]==' ' && arr3[k1+1]==' ' && arr3[k1+2]=='|'
                                 ){
                                     ans=ans+"7";
                                 }

                                 // For case 8
                                 if(arr1[k1]==' ' && arr1[k1+1]=='_' && arr1[k1+2]==' ' && 
                                 arr2[k1]=='|' && arr2[k1+1]=='_' && arr2[k1+2]=='|' &&
                                 arr3[k1]=='|' && arr3[k1+1]=='_' && arr3[k1+2]=='|'
                                 ){
                                     ans=ans+"8";
                                 }

                                 //For case 6 
                                 if(arr1[k1]==' ' && arr1[k1+1]=='_' && arr1[k1+2]==' ' && 
                                 arr2[k1]=='|' && arr2[k1+1]=='_' && arr2[k1+2]==' ' &&
                                 arr3[k1]=='|' && arr3[k1+1]=='_' && arr3[k1+2]=='|'
                                 )
                                 {
                                    ans=ans+"6";
                                 }
                                 
                                 //For case 9
                                 if(arr1[k1]==' ' && arr1[k1+1]=='_' && arr1[k1+2]==' ' && 
                                 arr2[k1]=='|' && arr2[k1+1]=='_' && arr2[k1+2]=='|' &&
                                 arr3[k1]==' ' && arr3[k1+1]=='_' && arr3[k1+2]=='|'
                                 ){
                                     ans=ans+"9";
                                 }                    
                         }
                             ans=ans+"\n";
                             result=result+ans;
                             //console.log(ans);
                             i1=0;i2=0;i3=0;
                     }
                     lr.on('end' , function(){
                         //console.log(result);
                         fs.writeFileSync("output.txt", result+ "\n");  
                     });
                     res.end("File Read Successfully Go to your Project Root Directory and find the output file output.txt");
                     
                });
}

// Srever Listen....................
 app.listen(port , function(){
     console.log("Listening at port " + port);
 })