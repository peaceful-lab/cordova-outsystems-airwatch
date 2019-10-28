module.exports = function(ctx) {

    var fs = ctx.requireCordovaModule('fs'),
    path = ctx.requireCordovaModule('path'),
    child_process = ctx.requireCordovaModule('child_process');

    console.log("Removing Air Watch plugin...");
    var projectFolder = path.join(ctx.opts.projectRoot);

    var spawnSync = child_process.spawnSync;
    var pluginRemove = spawnSync('cordova', [ 'plugin','remove', 'outsystems-plugin-PeacefulEvolution-airwatch-sdk' ], {
        cwd: projectFolder   });

    if(pluginRemove.stdout){
        console.log(pluginRemove.stdout.toString('utf8'));
    }

    if(pluginRemove.stderr){
        console.error(pluginRemove.stderr.toString('utf8'));        
    }

    if(pluginRemove.error || pluginRemove.signal){
        throw "Failed to remove Air Watch plugin."
    }

};