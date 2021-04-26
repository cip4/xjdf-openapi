package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.YmlModel

abstract class OpenApiParticle<Model : YmlModel> {

    fun writeYmlTo(writer: YmlWriter) {
        writer.writeLines(getModel().toYml())
    }

    abstract fun getModel(): Model

}