package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.YmlModel

abstract class OpenApiParticle<Model : YmlModel> {

    abstract fun getModel(): Model

}