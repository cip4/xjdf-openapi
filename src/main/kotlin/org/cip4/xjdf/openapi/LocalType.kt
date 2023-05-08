/*
 * The CIP4 Software License, Version 1.0
 *
 * Copyright (c) 2001-2021 The International Cooperation for the Integration of
 * Processes in Prepress, Press and Postpress (CIP4). All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation and/or
 * other materials provided with the distribution.
 *
 * 3. The end-user documentation included with the redistribution, if any, must
 * include the following acknowledgment: &quot;This product includes software developed
 * by the The International Cooperation for the Integration of Processes in
 * Prepress, Press and Postpress (www.cip4.org)&quot; Alternately, this acknowledgment
 * may appear in the software itself, if and wherever such third-party
 * acknowledgments normally appear.
 *
 * 4. The names &quot;CIP4&quot; and &quot;The International Cooperation for the Integration of
 * Processes in Prepress, Press and Postpress&quot; must not be used to endorse or
 * promote products derived from this software without prior written permission.
 * For written permission, please contact info@cip4.org
 *
 * 5. Products derived from this software may not be called &quot;CIP4&quot;, nor may &quot;CIP4&quot;
 * appear in their name, without prior written permission of the CIP4 organization
 *
 * &quot;CIP4&quot; and &quot;The International Cooperation for the Integration of Processes in
 * Prepress, Press and Postpress&quot; are trademarks of The International Cooperation
 * for the Integration of Processes in Prepress, Press and Postpress (CIP4).  All
 * other names and brands are the property of their respective owners.
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 * INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. CIP4 AND ITS CONTRIBUTORS MAKE
 * NO REPRESENTATION THAT THE USE OF THIS SOFTWARE OR DATA WILL NOT INFRINGE ANY
 * PATENTS, COPYRIGHTS, TRADEMARKS, OR OTHER RIGHTS. IN NO EVENT SHALL CIP4 OR ITS
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
 * OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
 * OF SUCH DAMAGE.
 * ====================================================================
 *
 * This software consists of voluntary contributions made by many individuals on
 * behalf of the The International Cooperation for the Integration of Processes in
 * Prepress, Press and Postpress and was originally based on software some of which
 * contributed by and copyrighted by Adobe Systems and Man Roland. copyright (c)
 * 2000-2001, Adobe Systems copyright (c) 2001-2001, Man Roland
 *
 * For more information on The International Cooperation for the Integration of
 * Processes in Prepress, Press and Postpress , please see &lt;http://www.cip4.org/&gt;.
 */

package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Model
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants

class LocalType(
    private val node: Node,
    private val context: Context
) : Modelable, AttributeType() {

    val simpleType: Node
        get() = context.xPath.evaluate(
            "xs:simpleType",
            node,
            XPathConstants.NODE
        ) as Node

    companion object Factory : AttributeType.Factory<LocalType> {
        override fun supports(candidate: Node, xPath: XPath): Boolean =
            (xPath.evaluate(
                "xs:simpleType",
                candidate,
                XPathConstants.NODESET
            ) as NodeList).length > 0

        override fun create(node: Node, context: Context) = LocalType(node, context)
    }

    override fun getModel(): Model {
        return SimpleType.Factory.create(simpleType, context).getModel()
    }

}