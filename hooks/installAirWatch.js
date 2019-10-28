module.exports = function(ctx) {

    var fs = ctx.requireCordovaModule('fs'),
    path = ctx.requireCordovaModule('path'),
    child_process = ctx.requireCordovaModule('child_process');

    console.log("Removing cordova-plugin-splashscreen...");
    var projectFolder = path.join(ctx.opts.projectRoot);

    var spawnSync = child_process.spawnSync;

    /*
    var pluginRemove = spawnSync('cordova', [ 'plugin','remove', 'cordova-plugin-splashscreen' ], {
    cwd: projectFolder   });

    if(pluginRemove.stdout){
        console.log(pluginRemove.stdout.toString('utf8'));
    }

    if(pluginRemove.stderr){
        console.error(pluginRemove.stderr.toString('utf8'));        
    }

    if(pluginRemove.error || pluginRemove.signal){
        throw "Failed to remove cordova-plugin-splashscreen."
    }
    */


    console.log("Installing Air Watch plugin...");

    var pluginInstall = spawnSync('cordova', [ 'plugin','add', 'outsystems-plugin-PeacefulEvolution-airwatch-sdk' ], {
        cwd: projectFolder   });

    if(pluginInstall.stdout){
        console.log(pluginInstall.stdout.toString('utf8'));
    }

    if(pluginInstall.stderr){
        console.error(pluginInstall.stderr.toString('utf8'));        
    }

    if(pluginInstall.error || pluginInstall.signal){
        throw "Failed to install Air Watch plugin."
    }

};