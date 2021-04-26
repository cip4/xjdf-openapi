package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.YmlModel

interface Modelable {

    fun getModel(): YmlModel

}