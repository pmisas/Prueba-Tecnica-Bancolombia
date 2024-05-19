const AuditLog = require('../../db/Models/auditlogModel');
const EscenaService = require('../../Services/EscenaService');
const escenaService = new EscenaService();

const DialogoService = require('../../Services/DialogoService');
const dialogoService = new DialogoService();

const UbicacionService = require('../../Services/UbicacionService');
const ubicacionService = new UbicacionService();

const PoseService = require('../../Services/PoseService');
const poseService = new PoseService();

function logOperation(tableName) {
  return async (req, res, next) => {
    const method = req.method; 
    const username = req.user.username;
    let scriptId = req.body.GuionId || req.params.scriptId || null;

    let scriptId2 = null;

    if (['Dialogo', 'Ubicacion', 'Pose'].includes(tableName)) {
      let escenaId = req.body.EscenaId;

      
      if (['PUT', 'DELETE'].includes(method) && !escenaId) {
        const id = req.params.id; 
        let item;


        if (tableName === 'Dialogo') {
          item = await dialogoService.findDialogoById(id);
        } else if (tableName === 'Ubicacion') {
          item = await ubicacionService.findUbicacionActorById(id);
        } else if (tableName === 'Pose') {
          item = await poseService.findPoseActorById(id);
        }

        if (item) {
          escenaId = item.EscenaId;
        }
      }

      if (escenaId) {
        const escena = await escenaService.findEscenaById(escenaId);
        if (escena) {
          scriptId2 = escena.GuionId;
        }
      }
    }

    scriptId = scriptId2 || scriptId;


    if (['POST', 'PUT', 'DELETE'].includes(method) && scriptId) {
      await AuditLog.create({
        tableName,
        operation: method,
        username,
        scriptId
      });
    } else {
      console.log("No se registró la operación. Razón:", { method, scriptId, condition: ['POST', 'PUT', 'DELETE'].includes(method) && scriptId });
    }

    next();
  };
}

module.exports = logOperation;
