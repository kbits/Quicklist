<?php
  header('Content-Type: text/cache-manifest');
?>
CACHE MANIFEST
# 2014-05-05 17:15

# Explicitly cached 'master entries'.
# CACHE:
<?php
$newest=0;
//date=filemtime("index.html");
listdir(".");
echo "#".$newest;

function listdir($d){
        GLOBAL $newest;
        $dir=new directoryIterator($d);
        foreach($dir as $file){
                if($file->isDot()) continue;
                $p=$d."/".$file;
        if($file->isDir()){
            listdir($p);
        }
                $filename= $file->getFilename();
                if($filename=="appcache.php" OR $filename==".htaccess" OR $filename=="help.html")continue;
                
        if(!$file->isDir()){
            echo $p."\n";
            $date=filemtime($p);
            if($date > $newest){
                $newest=$date;
            }
        }
    }
}
echo "\n";
?>

# Resources that require the user to be online.
NETWORK:
http://dev.kbits.at/adver.php
http://webapp.kbits.at/quicklist/help.html

FALLBACK:
http://webapp.kbits.at/adver/quicklist.jpg http://webapp.kbits.at/webapp/QuickList/img/adverOffline.jpg