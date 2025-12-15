window.swaggerSpec={
  "openapi" : "3.1.0",
  "info" : {
    "title" : "CLOUD-XJDF",
    "description" : "The json flavour of XJDF",
    "version" : "0.0.1"
  },
  "paths" : {
    "/wake-up" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandWakeUp" : {
                    "$ref" : "#/components/schemas/CommandWakeUp"
                  }
                },
                "required" : [ "Header", "CommandWakeUp" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "ResponseWakeUp" : {
                      "$ref" : "#/components/schemas/ResponseWakeUp"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseWakeUp" ]
                }
              }
            }
          }
        }
      }
    },
    "/gang/force" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandForceGang" : {
                    "$ref" : "#/components/schemas/CommandForceGang"
                  }
                },
                "required" : [ "Header", "CommandForceGang" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseForceGang" : {
                      "$ref" : "#/components/schemas/ResponseForceGang"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseForceGang" ]
                }
              }
            }
          }
        }
      }
    },
    "/persistent-channel/stop" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandStopPersistentChannel" : {
                    "$ref" : "#/components/schemas/CommandStopPersistentChannel"
                  }
                },
                "required" : [ "Header", "CommandStopPersistentChannel" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseStopPersistentChannel" : {
                      "$ref" : "#/components/schemas/ResponseStopPersistentChannel"
                    }
                  },
                  "required" : [ "Header", "ResponseStopPersistentChannel" ]
                }
              }
            }
          }
        }
      }
    },
    "/queue-entry/modify" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandModifyQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandModifyQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandModifyQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "ResponseModifyQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseModifyQueueEntry"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseModifyQueueEntry" ]
                }
              }
            }
          }
        }
      }
    },
    "/queue-status" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "QueryQueueStatus" : {
                    "$ref" : "#/components/schemas/QueryQueueStatus"
                  }
                },
                "required" : [ "Header", "QueryQueueStatus" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "ResponseQueueStatus" : {
                      "$ref" : "#/components/schemas/ResponseQueueStatus"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseQueueStatus" ]
                }
              }
            }
          }
        }
      }
    },
    "/queue-entry/resubmit" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "CommandResubmitQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandResubmitQueueEntry"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  }
                },
                "required" : [ "Header", "CommandResubmitQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseResubmitQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseResubmitQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseResubmitQueueEntry" ]
                }
              }
            }
          }
        }
      }
    },
    "/queue-entry/request" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandRequestQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandRequestQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandRequestQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "ResponseRequestQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseRequestQueueEntry"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseRequestQueueEntry" ]
                }
              }
            }
          }
        }
      }
    },
    "/resource/command" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandResource" : {
                    "$ref" : "#/components/schemas/CommandResource"
                  }
                },
                "required" : [ "Header", "CommandResource" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "ResponseResource" : {
                      "$ref" : "#/components/schemas/ResponseResource"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseResource" ]
                }
              }
            }
          }
        }
      }
    },
    "/known-messages" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "QueryKnownMessages" : {
                    "$ref" : "#/components/schemas/QueryKnownMessages"
                  }
                },
                "required" : [ "Header", "QueryKnownMessages" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseKnownMessages" : {
                      "$ref" : "#/components/schemas/ResponseKnownMessages"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownMessages" ]
                }
              }
            }
          }
        }
      }
    },
    "/pipe-control" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "CommandPipeControl" : {
                    "$ref" : "#/components/schemas/CommandPipeControl"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  }
                },
                "required" : [ "Header", "CommandPipeControl" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponsePipeControl" : {
                      "$ref" : "#/components/schemas/ResponsePipeControl"
                    }
                  },
                  "required" : [ "Header", "ResponsePipeControl" ]
                }
              }
            }
          }
        }
      }
    },
    "/queue-entry/return" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandReturnQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandReturnQueueEntry"
                  }
                },
                "required" : [ "Header", "CommandReturnQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseReturnQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseReturnQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseReturnQueueEntry" ]
                }
              }
            }
          }
        }
      }
    },
    "/notification" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "QueryNotification" : {
                    "$ref" : "#/components/schemas/QueryNotification"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  }
                },
                "required" : [ "Header", "QueryNotification" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "ResponseNotification" : {
                      "$ref" : "#/components/schemas/ResponseNotification"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseNotification" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryNotification/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          },
                          "SignalNotification" : {
                            "$ref" : "#/components/schemas/SignalNotification"
                          }
                        },
                        "required" : [ "Header", "SignalNotification" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/status" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "QueryStatus" : {
                    "$ref" : "#/components/schemas/QueryStatus"
                  }
                },
                "required" : [ "Header", "QueryStatus" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseStatus" : {
                      "$ref" : "#/components/schemas/ResponseStatus"
                    }
                  },
                  "required" : [ "Header", "ResponseStatus" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryStatus/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          },
                          "SignalStatus" : {
                            "$ref" : "#/components/schemas/SignalStatus"
                          }
                        },
                        "required" : [ "Header", "SignalStatus" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/queue-entry/submit" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "CommandSubmitQueueEntry" : {
                    "$ref" : "#/components/schemas/CommandSubmitQueueEntry"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  }
                },
                "required" : [ "Header", "CommandSubmitQueueEntry" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseSubmitQueueEntry" : {
                      "$ref" : "#/components/schemas/ResponseSubmitQueueEntry"
                    }
                  },
                  "required" : [ "Header", "ResponseSubmitQueueEntry" ]
                }
              }
            }
          }
        }
      }
    },
    "/gang/status" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "QueryGangStatus" : {
                    "$ref" : "#/components/schemas/QueryGangStatus"
                  }
                },
                "required" : [ "Header", "QueryGangStatus" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "ResponseGangStatus" : {
                      "$ref" : "#/components/schemas/ResponseGangStatus"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseGangStatus" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryGangStatus/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "SignalGangStatus" : {
                            "$ref" : "#/components/schemas/SignalGangStatus"
                          },
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          }
                        },
                        "required" : [ "Header", "SignalGangStatus" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/known-devices" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "QueryKnownDevices" : {
                    "$ref" : "#/components/schemas/QueryKnownDevices"
                  },
                  "Version" : {
                    "type" : "string"
                  }
                },
                "required" : [ "Header", "QueryKnownDevices" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseKnownDevices" : {
                      "$ref" : "#/components/schemas/ResponseKnownDevices"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownDevices" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryKnownDevices/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          },
                          "SignalKnownDevices" : {
                            "$ref" : "#/components/schemas/SignalKnownDevices"
                          }
                        },
                        "required" : [ "Header", "SignalKnownDevices" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/known-subscriptions" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "QueryKnownSubscriptions" : {
                    "$ref" : "#/components/schemas/QueryKnownSubscriptions"
                  },
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  }
                },
                "required" : [ "Header", "QueryKnownSubscriptions" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseKnownSubscriptions" : {
                      "$ref" : "#/components/schemas/ResponseKnownSubscriptions"
                    }
                  },
                  "required" : [ "Header", "ResponseKnownSubscriptions" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryKnownSubscriptions/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          },
                          "SignalKnownSubscriptions" : {
                            "$ref" : "#/components/schemas/SignalKnownSubscriptions"
                          }
                        },
                        "required" : [ "Header", "SignalKnownSubscriptions" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/resource/query" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "QueryResource" : {
                    "$ref" : "#/components/schemas/QueryResource"
                  }
                },
                "required" : [ "Header", "QueryResource" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "ResponseResource" : {
                      "$ref" : "#/components/schemas/ResponseResource"
                    },
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "Header", "ResponseResource" ]
                }
              }
            }
          }
        },
        "callbacks" : {
          "signal" : {
            "{\\$request.body#/QueryResource/Subscription}" : {
              "post" : {
                "requestBody" : {
                  "required" : true,
                  "content" : {
                    "application/vnd.cip4-xjmf+json" : {
                      "schema" : {
                        "type" : "object",
                        "properties" : {
                          "Header" : {
                            "$ref" : "#/components/schemas/Header"
                          },
                          "Version" : {
                            "type" : "string"
                          },
                          "SignalResource" : {
                            "$ref" : "#/components/schemas/SignalResource"
                          }
                        },
                        "required" : [ "Header", "SignalResource" ]
                      }
                    }
                  }
                },
                "responses" : {
                  "200" : {
                    "content" : {
                      "application/vnd.cip4-xjmf+json" : {
                        "schema" : {
                          "type" : "object",
                          "properties" : {
                            "Header" : {
                              "$ref" : "#/components/schemas/Header"
                            },
                            "Version" : {
                              "type" : "string"
                            },
                            "XJDF" : {
                              "$ref" : "#/components/schemas/XJDF"
                            }
                          },
                          "required" : [ "Header", "XJDF" ]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/shutdown" : {
      "post" : {
        "requestBody" : {
          "required" : true,
          "content" : {
            "application/vnd.cip4-xjmf+json" : {
              "schema" : {
                "type" : "object",
                "properties" : {
                  "Header" : {
                    "$ref" : "#/components/schemas/Header"
                  },
                  "Version" : {
                    "type" : "string"
                  },
                  "CommandShutDown" : {
                    "$ref" : "#/components/schemas/CommandShutDown"
                  }
                },
                "required" : [ "Header", "CommandShutDown" ]
              }
            }
          }
        },
        "responses" : {
          "200" : {
            "content" : {
              "application/vnd.cip4-xjmf+json" : {
                "schema" : {
                  "type" : "object",
                  "properties" : {
                    "Header" : {
                      "$ref" : "#/components/schemas/Header"
                    },
                    "Version" : {
                      "type" : "string"
                    },
                    "ResponseShutDown" : {
                      "$ref" : "#/components/schemas/ResponseShutDown"
                    }
                  },
                  "required" : [ "Header", "ResponseShutDown" ]
                }
              }
            }
          }
        }
      }
    }
  },
  "components" : {
    "schemas" : {
      "Fold" : {
        "type" : "object",
        "properties" : {
          "Travel" : {
            "type" : "number",
            "format" : "float"
          },
          "From" : {
            "type" : "string",
            "enum" : [ "Front", "Left" ]
          },
          "To" : {
            "type" : "string",
            "enum" : [ "Up", "Down" ]
          }
        },
        "required" : [ "From", "To" ]
      },
      "EnumGangPolicy" : {
        "type" : "string",
        "enum" : [ "Gang", "GangAndForce", "NoGang" ]
      },
      "PreflightItem" : {
        "type" : "object",
        "properties" : {
          "PreflightLevel" : {
            "type" : "string",
            "enum" : [ "Basic", "Extended", "Premium" ]
          }
        }
      },
      "Query" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object",
          "properties" : {
            "Subscription" : {
              "$ref" : "#/components/schemas/Subscription"
            }
          }
        } ]
      },
      "Product" : {
        "type" : "object",
        "properties" : {
          "IsRoot" : {
            "type" : "boolean"
          },
          "Comment" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Comment"
            }
          },
          "Amount" : {
            "type" : "integer"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProductType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProductTypeDetails" : {
            "type" : "string"
          },
          "Intent" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Intent"
            }
          },
          "MaxAmount" : {
            "type" : "integer"
          },
          "GeneralID" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GeneralID"
            }
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "MinAmount" : {
            "type" : "integer"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "PartVersion" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "PerforatingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Perforate" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Perforate"
              },
              "minItems" : 1
            }
          },
          "required" : [ "Perforate" ]
        } ]
      },
      "ConventionalPrintingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FirstSurface" : {
              "$ref" : "#/components/schemas/Side"
            },
            "Speed" : {
              "type" : "number",
              "format" : "float"
            },
            "FountainSolution" : {
              "type" : "string",
              "enum" : [ "On", "Off" ]
            },
            "FeedSheetLay" : {
              "$ref" : "#/components/schemas/FeedSheetLay"
            },
            "WorkStyle" : {
              "$ref" : "#/components/schemas/WorkStyle"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            },
            "Powder" : {
              "$ref" : "#/components/schemas/Percentage"
            },
            "Drying" : {
              "$ref" : "#/components/schemas/EnumDrying"
            },
            "ModuleDrying" : {
              "$ref" : "#/components/schemas/EnumDrying"
            }
          }
        } ]
      },
      "ProductIntent" : {
        "type" : "object"
      },
      "QueryKnownSubscriptions" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionFilter" : {
              "$ref" : "#/components/schemas/SubscriptionFilter"
            }
          }
        } ]
      },
      "XJMF" : {
        "$schema" : "https://json-schema.org/draft/2020-12/schema",
        "type" : "object",
        "properties" : {
          "Message" : {
            "$ref" : "#/components/schemas/Message"
          },
          "Header" : {
            "$ref" : "#/components/schemas/Header"
          },
          "Version" : {
            "$ref" : "#/components/schemas/Version"
          }
        },
        "required" : [ "Header" ]
      },
      "EnumFitPolicy" : {
        "type" : "string",
        "enum" : [ "NoRepeat", "RepeatToFill", "RepeatUnclipped", "StretchToFit", "UndistortedScaleToFit" ]
      },
      "CommandResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceCmdParams" : {
              "$ref" : "#/components/schemas/ResourceCmdParams"
            }
          },
          "required" : [ "ResourceCmdParams" ]
        } ]
      },
      "SignalStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceInfo" : {
              "$ref" : "#/components/schemas/DeviceInfo"
            }
          },
          "required" : [ "DeviceInfo" ]
        } ]
      },
      "ChannelBindingDetails" : {
        "type" : "object",
        "properties" : {
          "ClampSize" : {
            "$ref" : "#/components/schemas/shape"
          },
          "Cover" : {
            "type" : "boolean"
          },
          "ClampD" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "HoleMakingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "HolePattern" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/HolePattern"
              },
              "minItems" : 1
            }
          },
          "required" : [ "HolePattern" ]
        } ]
      },
      "ShapeCuttingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "ShapeCut" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ShapeCut"
              },
              "minItems" : 1
            }
          },
          "required" : [ "ShapeCut" ]
        } ]
      },
      "Orientation" : {
        "type" : "string",
        "enum" : [ "Rotate0", "Rotate90", "Rotate180", "Rotate270", "Flip0", "Flip90", "Flip180", "Flip270" ]
      },
      "GluingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Glue"
              }
            },
            "GluingProductionID" : {
              "type" : "string"
            }
          }
        } ]
      },
      "ShapeCuttingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ModuleID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "DeliveryMode" : {
              "type" : "string",
              "enum" : [ "FullSheet", "RemoveGripperMargin", "SeparateBlanks" ]
            },
            "Shape" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Shape"
              }
            },
            "DieLayoutRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            }
          }
        } ]
      },
      "FontParams" : {
        "type" : "object",
        "properties" : {
          "EmbedAllFonts" : {
            "type" : "boolean"
          },
          "MaxSubsetPct" : {
            "type" : "integer"
          },
          "NeverEmbed" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "AlwaysEmbed" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "SeparationTint" : {
        "type" : "object",
        "properties" : {
          "Tint" : {
            "type" : "number",
            "format" : "float"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Name", "Tint" ]
      },
      "Employee" : {
        "type" : "object",
        "properties" : {
          "PersonalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Role" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Person" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Person"
            }
          },
          "CostCenterID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ResourceCmdParams" : {
        "type" : "object",
        "properties" : {
          "UpdateMethod" : {
            "type" : "string",
            "enum" : [ "Complete", "CompleteSet", "Incremental", "Remove", "RemoveSet" ]
          },
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          }
        },
        "required" : [ "UpdateMethod", "ResourceSet" ]
      },
      "DieLayout" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Rotated" : {
              "type" : "boolean"
            },
            "Station" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Station"
              }
            },
            "CutBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "Device" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Device"
              }
            },
            "RuleLength" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/RuleLength"
              }
            },
            "CutLines" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Media" : {
              "$ref" : "#/components/schemas/Media"
            },
            "DieSide" : {
              "type" : "string",
              "enum" : [ "Up", "Down" ]
            },
            "MediaSide" : {
              "type" : "string",
              "enum" : [ "Front", "Back" ]
            },
            "Waste" : {
              "$ref" : "#/components/schemas/Percentage"
            }
          }
        } ]
      },
      "Part" : {
        "type" : "object",
        "properties" : {
          "ContactType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Separation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Metadata" : {
            "$ref" : "#/components/schemas/regExp"
          },
          "Product" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SheetName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Side" : {
            "$ref" : "#/components/schemas/Side"
          },
          "DocIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "StationName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TransferCurveName" : {
            "type" : "string",
            "enum" : [ "Film", "Plate", "Press", "Substrate", "Proof" ]
          },
          "PageNumber" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "QualityMeasurement" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProductPart" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SheetIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "RunIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "PrintCondition" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Run" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DropID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "LotID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PreviewType" : {
            "type" : "string",
            "enum" : [ "Animation", "Icon", "Identification", "SeparatedThumbNail", "Separation", "SeparationRaw", "Static3D", "ThumbNail", "Viewable" ]
          },
          "SetIndex" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "BlockName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TileID" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Option" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "BinderySignatureID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "BundleItemName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PartVersion" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "WebName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Location" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "Crease" : {
        "type" : "object",
        "properties" : {
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/EnumTopBottom"
          },
          "Depth" : {
            "type" : "number",
            "format" : "float"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "RegisterRibbon" : {
        "type" : "object",
        "properties" : {
          "LengthOverall" : {
            "type" : "number",
            "format" : "float"
          },
          "RibbonEnd" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Material" : {
            "type" : "string"
          },
          "RibbonColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "VisibleLength" : {
            "type" : "number",
            "format" : "float"
          },
          "RibbonColorDetails" : {
            "type" : "string"
          }
        }
      },
      "AssemblySection" : {
        "type" : "object",
        "properties" : {
          "DescriptiveName" : {
            "type" : "string"
          },
          "CommonFolds" : {
            "type" : "integer",
            "minimum" : 2.0
          },
          "AssemblySection" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/AssemblySection"
            }
          },
          "BinderySignatureID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "BinderySignatureID" ]
      },
      "RequestQueueEntryParams" : {
        "type" : "object",
        "properties" : {
          "Activation" : {
            "$ref" : "#/components/schemas/Activation"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QueueURL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "QueueURL" ]
      },
      "JBIG2Params" : {
        "type" : "object",
        "properties" : {
          "JBIG2Lossless" : {
            "type" : "boolean"
          }
        }
      },
      "matrix" : {
        "minItems" : 6,
        "maxItems" : 6,
        "$ref" : "#/components/schemas/FloatList"
      },
      "Notification" : {
        "type" : "object",
        "properties" : {
          "ModuleID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Comment" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Comment"
            }
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Milestone" : {
            "$ref" : "#/components/schemas/Milestone"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "Event" : {
            "$ref" : "#/components/schemas/Event"
          },
          "Class" : {
            "$ref" : "#/components/schemas/Severity"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Class" ]
      },
      "RingBindingDetails" : {
        "type" : "object",
        "properties" : {
          "RingMechanic" : {
            "type" : "boolean"
          },
          "RingShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ViewBinder" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "SpineWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "RivetsExposed" : {
            "type" : "boolean"
          }
        }
      },
      "ColorMeasurement" : {
        "type" : "object",
        "properties" : {
          "ColorControlStrip" : {
            "$ref" : "#/components/schemas/ColorControlStrip"
          }
        }
      },
      "Defect" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "DefectType" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "FinishingDefect", "ImageDefect", "ImageFinishingDefect", "Other", "SheetDefect", "SubstrateDefect" ]
            }
          },
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Size" : {
            "type" : "number",
            "format" : "float"
          },
          "Box" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "DefectReason" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Severity" : {
            "$ref" : "#/components/schemas/Score"
          },
          "DefectTypeDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          }
        },
        "required" : [ "DefectType" ]
      },
      "Queue" : {
        "type" : "object",
        "properties" : {
          "UpdateGranularity" : {
            "$ref" : "#/components/schemas/UpdateGranularity"
          },
          "QueueSize" : {
            "type" : "integer"
          },
          "MaxQueueSize" : {
            "type" : "integer"
          },
          "QueueEntry" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/QueueEntry"
            }
          }
        }
      },
      "XPath" : {
        "type" : "string"
      },
      "CommandShutDown" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ShutDownCmdParams" : {
              "$ref" : "#/components/schemas/ShutDownCmdParams"
            }
          },
          "required" : [ "ShutDownCmdParams" ]
        } ]
      },
      "ShapeCut" : {
        "type" : "object",
        "properties" : {
          "CutBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "CutDepth" : {
            "type" : "string",
            "enum" : [ "Full", "Partial" ]
          },
          "CutPath" : {
            "$ref" : "#/components/schemas/PDFPath"
          },
          "CutOut" : {
            "type" : "boolean"
          },
          "ShapeType" : {
            "type" : "string",
            "enum" : [ "Line", "Path", "Rectangular", "Round", "RoundedRectangle" ]
          },
          "ShapeTypeDetails" : {
            "type" : "string"
          },
          "CutType" : {
            "type" : "string",
            "enum" : [ "Cut", "Perforate" ]
          }
        },
        "required" : [ "ShapeType" ]
      },
      "Intent" : {
        "type" : "object",
        "properties" : {
          "LaminatingIntent" : {
            "$ref" : "#/components/schemas/LaminatingIntent"
          },
          "BindingIntent" : {
            "$ref" : "#/components/schemas/BindingIntent"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "AssemblingIntent" : {
            "$ref" : "#/components/schemas/AssemblingIntent"
          },
          "ShapeCuttingIntent" : {
            "$ref" : "#/components/schemas/ShapeCuttingIntent"
          },
          "MediaIntent" : {
            "$ref" : "#/components/schemas/MediaIntent"
          },
          "FoldingIntent" : {
            "$ref" : "#/components/schemas/FoldingIntent"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ColorIntent" : {
            "$ref" : "#/components/schemas/ColorIntent"
          },
          "EmbossingIntent" : {
            "$ref" : "#/components/schemas/EmbossingIntent"
          },
          "ProductionIntent" : {
            "$ref" : "#/components/schemas/ProductionIntent"
          },
          "IntentResource" : {
            "$ref" : "#/components/schemas/IntentResource"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "HoleMakingIntent" : {
            "$ref" : "#/components/schemas/HoleMakingIntent"
          },
          "VariableIntent" : {
            "$ref" : "#/components/schemas/VariableIntent"
          },
          "ContentCheckIntent" : {
            "$ref" : "#/components/schemas/ContentCheckIntent"
          },
          "LayoutIntent" : {
            "$ref" : "#/components/schemas/LayoutIntent"
          }
        },
        "required" : [ "Name" ],
        "oneOf" : [ {
          "required" : [ "LaminatingIntent" ]
        }, {
          "required" : [ "BindingIntent" ]
        }, {
          "required" : [ "AssemblingIntent" ]
        }, {
          "required" : [ "ShapeCuttingIntent" ]
        }, {
          "required" : [ "MediaIntent" ]
        }, {
          "required" : [ "FoldingIntent" ]
        }, {
          "required" : [ "ColorIntent" ]
        }, {
          "required" : [ "EmbossingIntent" ]
        }, {
          "required" : [ "ProductionIntent" ]
        }, {
          "required" : [ "IntentResource" ]
        }, {
          "required" : [ "HoleMakingIntent" ]
        }, {
          "required" : [ "VariableIntent" ]
        }, {
          "required" : [ "ContentCheckIntent" ]
        }, {
          "required" : [ "LayoutIntent" ]
        }, {
          "not" : {
            "anyOf" : [ {
              "required" : [ "LaminatingIntent" ]
            }, {
              "required" : [ "BindingIntent" ]
            }, {
              "required" : [ "AssemblingIntent" ]
            }, {
              "required" : [ "ShapeCuttingIntent" ]
            }, {
              "required" : [ "MediaIntent" ]
            }, {
              "required" : [ "FoldingIntent" ]
            }, {
              "required" : [ "ColorIntent" ]
            }, {
              "required" : [ "EmbossingIntent" ]
            }, {
              "required" : [ "ProductionIntent" ]
            }, {
              "required" : [ "IntentResource" ]
            }, {
              "required" : [ "HoleMakingIntent" ]
            }, {
              "required" : [ "VariableIntent" ]
            }, {
              "required" : [ "ContentCheckIntent" ]
            }, {
              "required" : [ "LayoutIntent" ]
            } ]
          }
        } ]
      },
      "EnumEmbossDirection" : {
        "type" : "string",
        "enum" : [ "Both", "Depressed", "Flat", "Raised" ]
      },
      "EmbossingItem" : {
        "type" : "object",
        "properties" : {
          "FoilColorDetails" : {
            "type" : "string"
          },
          "FoilColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "EmbossingType" : {
            "$ref" : "#/components/schemas/EmbossType"
          },
          "Separation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ToolName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ImageSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Height" : {
            "type" : "number",
            "format" : "float"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Direction" : {
            "$ref" : "#/components/schemas/EnumEmbossDirection"
          }
        },
        "required" : [ "EmbossingType" ]
      },
      "MediaLayers" : {
        "type" : "array",
        "items" : {
          "required" : [ "Name" ],
          "oneOf" : [ {
            "allOf" : [ {
              "$ref" : "#/components/schemas/Glue"
            }, {
              "properties" : {
                "Name" : {
                  "const" : "Glue"
                }
              }
            } ]
          }, {
            "allOf" : [ {
              "$ref" : "#/components/schemas/Media"
            }, {
              "properties" : {
                "Name" : {
                  "const" : "Media"
                }
              }
            } ]
          } ],
          "discriminator" : {
            "propertyName" : "Name"
          }
        }
      },
      "ProductList" : {
        "type" : "object",
        "properties" : {
          "Product" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Product"
            },
            "minItems" : 1
          }
        },
        "required" : [ "Product" ]
      },
      "Audit" : {
        "type" : "object",
        "properties" : {
          "Header" : {
            "$ref" : "#/components/schemas/Header"
          }
        },
        "required" : [ "Header" ]
      },
      "ApprovalDetails" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ApprovalStateDetails" : {
              "type" : "string"
            },
            "ApprovalState" : {
              "type" : "string",
              "enum" : [ "Approved", "ApprovedWithComment", "Rejected" ]
            },
            "Comment" : {
              "$ref" : "#/components/schemas/Comment"
            },
            "ApprovalPerson" : {
              "$ref" : "#/components/schemas/ApprovalPerson"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            }
          },
          "required" : [ "ApprovalState" ]
        } ]
      },
      "Layout" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "MinCollect" : {
              "type" : "integer"
            },
            "ExpansionBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "Automated" : {
              "type" : "boolean"
            },
            "MaxCollect" : {
              "type" : "integer"
            },
            "SurfaceContentsBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "Position" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Position"
              }
            },
            "Device" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Device"
              }
            },
            "FeedSheetLay" : {
              "$ref" : "#/components/schemas/FeedSheetLay"
            },
            "WorkStyle" : {
              "$ref" : "#/components/schemas/WorkStyle"
            },
            "PlacedObject" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/PlacedObject"
              }
            },
            "FilmRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "PlateRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            },
            "OutermostShingling" : {
              "type" : "number",
              "format" : "float"
            },
            "Anchor" : {
              "$ref" : "#/components/schemas/Anchor"
            },
            "InnermostShingling" : {
              "type" : "number",
              "format" : "float"
            },
            "FitPolicy" : {
              "$ref" : "#/components/schemas/FitPolicy"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "SheetActivation" : {
              "$ref" : "#/components/schemas/SheetActivation"
            },
            "PaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "ProofPaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "StripMark" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/StripMark"
              }
            }
          }
        } ]
      },
      "Perforate" : {
        "type" : "object",
        "properties" : {
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/EnumTopBottom"
          },
          "TeethPerDimension" : {
            "type" : "number",
            "format" : "float"
          },
          "Depth" : {
            "type" : "number",
            "format" : "float"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "DeviceStatus" : {
        "type" : "string",
        "enum" : [ "Cleanup", "Idle", "NonProductive", "Offline", "Production", "Setup", "Stopped" ]
      },
      "QueryKnownMessages" : {
        "$ref" : "#/components/schemas/Query"
      },
      "AdhesiveNote" : {
        "type" : "object",
        "properties" : {
          "Glue" : {
            "$ref" : "#/components/schemas/Glue"
          }
        }
      },
      "BarcodeCompParams" : {
        "type" : "object",
        "properties" : {
          "CompensationValue" : {
            "type" : "number",
            "format" : "float"
          },
          "CompensationProcess" : {
            "type" : "string",
            "enum" : [ "Printing", "Platemaking" ]
          }
        },
        "required" : [ "CompensationProcess", "CompensationValue" ]
      },
      "ThreadSealingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ThreadStitchWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "ThreadPositions" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "ThreadLength" : {
              "type" : "number",
              "format" : "float"
            },
            "BlindStitch" : {
              "type" : "boolean"
            }
          }
        } ]
      },
      "SoftCoverBinding" : {
        "type" : "object",
        "properties" : {
          "SpineGlue" : {
            "$ref" : "#/components/schemas/EnumGlue"
          },
          "EndSheets" : {
            "type" : "boolean"
          },
          "BlockThreadSewing" : {
            "type" : "boolean"
          },
          "SpineOperations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "FoldingWidthBack" : {
            "type" : "number",
            "format" : "float"
          },
          "Scoring" : {
            "type" : "string",
            "enum" : [ "TwiceScored", "QuadScored", "None" ]
          },
          "GlueProcedure" : {
            "type" : "string",
            "enum" : [ "Spine", "SideOnly", "SingleSide", "SideSpine" ]
          },
          "FoldingWidth" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "language" : {
        "type" : "string"
      },
      "SubscriptionInfo" : {
        "type" : "object",
        "properties" : {
          "Languages" : {
            "$ref" : "#/components/schemas/languages"
          },
          "ChannelID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Subscription" : {
            "$ref" : "#/components/schemas/Subscription"
          },
          "DeviceID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MessageType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "ChannelID", "MessageType", "Subscription" ]
      },
      "SignalQueueStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "Queue" : {
              "$ref" : "#/components/schemas/Queue"
            }
          },
          "required" : [ "Queue" ]
        } ]
      },
      "AdvancedParams" : {
        "type" : "object",
        "properties" : {
          "PreserveEPSInfo" : {
            "type" : "boolean"
          },
          "PreserveHalftoneInfo" : {
            "type" : "boolean"
          },
          "UCRandBGInfo" : {
            "type" : "string",
            "enum" : [ "Preserve", "Remove" ]
          },
          "ParseDSCCommentForDocInfo" : {
            "type" : "boolean"
          },
          "LockDistillerParams" : {
            "type" : "boolean"
          },
          "PreserveOverprintSettings" : {
            "type" : "boolean"
          },
          "PassThroughJPEGImages" : {
            "type" : "boolean"
          },
          "AllowTransparency" : {
            "type" : "boolean"
          },
          "EmitDSCWarnings" : {
            "type" : "boolean"
          },
          "TransferFunctionInfo" : {
            "type" : "string",
            "enum" : [ "Preserve", "Remove", "Apply" ]
          },
          "ParseDSCComments" : {
            "type" : "boolean"
          },
          "PreserveCopyPage" : {
            "type" : "boolean"
          },
          "UsePrologue" : {
            "type" : "boolean"
          },
          "AutoPositionEPSInfo" : {
            "type" : "boolean"
          },
          "AllowPSXObjects" : {
            "type" : "boolean"
          },
          "EmbedJobOptions" : {
            "type" : "boolean"
          },
          "PreserveOPIComments" : {
            "type" : "boolean"
          }
        }
      },
      "MetadataMap" : {
        "type" : "object",
        "properties" : {
          "ValueFormat" : {
            "type" : "string"
          },
          "Expr" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Expr"
            }
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ValueTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "Name", "ValueFormat", "ValueTemplate" ]
      },
      "ResponseModifyQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "QueueEntry" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/QueueEntry"
              }
            }
          }
        } ]
      },
      "ThreadSewingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "NumberOfNeedles" : {
              "type" : "integer"
            },
            "SewingPattern" : {
              "type" : "string",
              "enum" : [ "CombinedStaggered", "Normal", "Side", "Staggered" ]
            },
            "NeedlePositions" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "ThreadThickness" : {
              "type" : "number",
              "format" : "float"
            },
            "BlindStitch" : {
              "type" : "boolean"
            },
            "Offset" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "Version" : {
        "type" : "string",
        "enum" : [ 2.0, 2.1, 2.2, 2.3 ]
      },
      "SheetActivation" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Condition"
            },
            "minItems" : 1
          },
          "Amount" : {
            "type" : "integer"
          }
        },
        "required" : [ "Condition" ]
      },
      "AuditPool" : {
        "type" : "array",
        "items" : {
          "required" : [ "Name" ],
          "oneOf" : [ {
            "allOf" : [ {
              "$ref" : "#/components/schemas/AuditCreated"
            }, {
              "properties" : {
                "Name" : {
                  "const" : "AuditCreated"
                }
              }
            } ]
          }, {
            "allOf" : [ {
              "$ref" : "#/components/schemas/AuditNotification"
            }, {
              "properties" : {
                "Name" : {
                  "const" : "AuditNotification"
                }
              }
            } ]
          }, {
            "allOf" : [ {
              "$ref" : "#/components/schemas/AuditProcessRun"
            }, {
              "properties" : {
                "Name" : {
                  "const" : "AuditProcessRun"
                }
              }
            } ]
          }, {
            "allOf" : [ {
              "$ref" : "#/components/schemas/AuditResource"
            }, {
              "properties" : {
                "Name" : {
                  "const" : "AuditResource"
                }
              }
            } ]
          }, {
            "allOf" : [ {
              "$ref" : "#/components/schemas/AuditStatus"
            }, {
              "properties" : {
                "Name" : {
                  "const" : "AuditStatus"
                }
              }
            } ]
          } ],
          "discriminator" : {
            "propertyName" : "Name"
          }
        }
      },
      "SaddleStitching" : {
        "type" : "object",
        "properties" : {
          "StapleShape" : {
            "$ref" : "#/components/schemas/StapleShape"
          },
          "StitchNumber" : {
            "type" : "integer"
          }
        }
      },
      "TIFFEmbeddedFile" : {
        "type" : "object",
        "properties" : {
          "TagType" : {
            "type" : "integer"
          },
          "TagNumber" : {
            "type" : "integer"
          },
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          }
        },
        "required" : [ "TagNumber", "TagType", "FileSpec" ]
      },
      "ContentMetadata" : {
        "type" : "object",
        "properties" : {
          "ContactRefs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            }
          },
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "Title" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ISBN" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GeneralID" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GeneralID"
            }
          }
        }
      },
      "ShapeTemplate" : {
        "type" : "object",
        "properties" : {
          "Standard" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FileSpec" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/FileSpec"
            }
          },
          "ShapeDimension" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/ShapeDimension"
            }
          },
          "InnerDimensions" : {
            "$ref" : "#/components/schemas/shape"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ScreenSelector" : {
        "type" : "object",
        "properties" : {
          "DotSize" : {
            "type" : "number",
            "format" : "float"
          },
          "SourceFrequencyMax" : {
            "type" : "number",
            "format" : "float"
          },
          "SpotFunction" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Separation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SourceFrequencyMin" : {
            "type" : "number",
            "format" : "float"
          },
          "Angle" : {
            "type" : "number",
            "format" : "float"
          },
          "ScreeningType" : {
            "type" : "string",
            "enum" : [ "Adaptive", "AM", "ErrorDiffusion", "FM", "HybridAM-FM", "HybridAMline-dot" ]
          },
          "ScreeningFamily" : {
            "type" : "string"
          },
          "Frequency" : {
            "type" : "number",
            "format" : "float"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          }
        }
      },
      "EnumOpacity" : {
        "type" : "string",
        "enum" : [ "Opaque", "Translucent", "Transparent" ]
      },
      "SubscriptionFilter" : {
        "type" : "object",
        "properties" : {
          "DeviceID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        }
      },
      "Color" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorMeasurementConditions" : {
              "$ref" : "#/components/schemas/ColorMeasurementConditions"
            },
            "Gray" : {
              "type" : "number",
              "format" : "float"
            },
            "CMYK" : {
              "$ref" : "#/components/schemas/CMYKColor"
            },
            "ColorTypeDetails" : {
              "type" : "string"
            },
            "RawName" : {
              "type" : "string"
            },
            "PrintingTechnology" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "PrintStandard" : {
              "type" : "string"
            },
            "Lab" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "Density" : {
              "type" : "number",
              "format" : "float"
            },
            "ActualColorName" : {
              "type" : "string"
            },
            "ColorName" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "Spectrum" : {
              "$ref" : "#/components/schemas/TransferFunction"
            },
            "sRGB" : {
              "$ref" : "#/components/schemas/sRGBColor"
            },
            "ColorBook" : {
              "type" : "string"
            },
            "DeviceNColor" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/DeviceNColor"
              }
            },
            "ColorDetails" : {
              "type" : "string"
            },
            "ColorType" : {
              "type" : "string",
              "enum" : [ "DieLine", "Normal", "Opaque", "OpaqueIgnore", "Primer", "Transparent" ]
            },
            "ColorBookEntry" : {
              "type" : "string"
            },
            "NeutralDensity" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "regExp" : {
        "type" : "string"
      },
      "CasingInParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CaseRadius" : {
              "type" : "number",
              "format" : "float"
            },
            "Glue" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Glue"
              }
            },
            "SpineWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "CoverWidth" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "ContentObject" : {
        "type" : "object"
      },
      "SignalGangStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "GangInfo" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/GangInfo"
              }
            }
          }
        } ]
      },
      "PreflightReport" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "WarningCount" : {
              "type" : "integer"
            },
            "PreflightCheck" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/PreflightCheck"
              }
            },
            "ErrorCount" : {
              "type" : "integer"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            }
          }
        } ]
      },
      "Icon" : {
        "type" : "object",
        "properties" : {
          "IconUsage" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/DeviceStatus"
            }
          },
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "BitDepth" : {
            "type" : "integer"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "BitDepth", "Size" ]
      },
      "TightBacking" : {
        "type" : "string",
        "enum" : [ "Round", "RoundBacked", "Flat", "FlatBacked" ]
      },
      "Patch" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "SeparationTint" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/SeparationTint"
            }
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PatchUsage" : {
            "type" : "string",
            "enum" : [ "Color", "Ignore", "Image", "Technical" ]
          },
          "Lab" : {
            "$ref" : "#/components/schemas/LabColor"
          },
          "NeutralDensity" : {
            "type" : "number",
            "format" : "float"
          },
          "RGB" : {
            "$ref" : "#/components/schemas/sRGBColor"
          },
          "SpotType" : {
            "type" : "string",
            "enum" : [ "Emulated", "Spot" ]
          },
          "Density" : {
            "type" : "number",
            "format" : "float"
          },
          "Spectrum" : {
            "$ref" : "#/components/schemas/TransferFunction"
          }
        },
        "required" : [ "PatchUsage" ]
      },
      "LabColor" : {
        "minItems" : 3,
        "maxItems" : 3,
        "$ref" : "#/components/schemas/FloatList"
      },
      "CommandPipeControl" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "PipeParams" : {
              "$ref" : "#/components/schemas/PipeParams"
            }
          },
          "required" : [ "PipeParams" ]
        } ]
      },
      "ResponseQueueStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "Queue" : {
              "$ref" : "#/components/schemas/Queue"
            }
          }
        } ]
      },
      "CIELABMeasuringField" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Percentages" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "CIELab" : {
            "$ref" : "#/components/schemas/LabColor"
          },
          "ScreenRuling" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "Tolerance" : {
            "type" : "number",
            "format" : "float"
          },
          "ScreenShape" : {
            "type" : "string"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Center", "CIELab" ]
      },
      "DropItem" : {
        "type" : "object",
        "properties" : {
          "TotalVolume" : {
            "type" : "number",
            "format" : "float"
          },
          "TotalWeight" : {
            "type" : "number",
            "format" : "float"
          },
          "ItemRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "TotalDimensions" : {
            "$ref" : "#/components/schemas/shape"
          },
          "Amount" : {
            "type" : "integer"
          }
        },
        "required" : [ "Amount", "ItemRef" ]
      },
      "SpineTapingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "HorizontalExcess" : {
              "type" : "number",
              "format" : "float"
            },
            "StripLength" : {
              "type" : "number",
              "format" : "float"
            },
            "TopExcess" : {
              "type" : "number",
              "format" : "float"
            },
            "Glue" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Glue"
              }
            },
            "HorizontalExcessBack" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "ApprovalParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ApprovalPerson" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ApprovalPerson"
              },
              "minItems" : 1
            }
          },
          "required" : [ "ApprovalPerson" ]
        } ]
      },
      "QueueFilter" : {
        "type" : "object",
        "properties" : {
          "MaxEntries" : {
            "type" : "integer"
          },
          "OlderThan" : {
            "type" : "string",
            "format" : "date-time"
          },
          "GangNames" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "MinPriority" : {
            "type" : "integer"
          },
          "StatusList" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/NodeStatus"
            }
          },
          "QueueEntryIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "FirstEntry" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GangSource" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GangSource"
            }
          },
          "NewerThan" : {
            "type" : "string",
            "format" : "date-time"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "MaxPriority" : {
            "type" : "integer"
          },
          "LastEntry" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "HardCoverBinding" : {
        "type" : "object",
        "properties" : {
          "EndSheets" : {
            "type" : "boolean"
          },
          "Jacket" : {
            "type" : "string",
            "enum" : [ "None", "Loose", "Glue" ]
          },
          "JapanBind" : {
            "type" : "boolean"
          },
          "BlockThreadSewing" : {
            "type" : "boolean"
          },
          "SpineOperations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "HeadBandColorDetails" : {
            "type" : "string"
          },
          "CoverStyle" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SpineGlue" : {
            "$ref" : "#/components/schemas/EnumGlue"
          },
          "Thickness" : {
            "type" : "number",
            "format" : "float"
          },
          "JacketFoldingWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "HeadBands" : {
            "type" : "boolean"
          },
          "HeadBandColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "RegisterRibbon" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/RegisterRibbon"
            }
          },
          "TightBacking" : {
            "$ref" : "#/components/schemas/TightBacking"
          }
        }
      },
      "ResponseForceGang" : {
        "$ref" : "#/components/schemas/Response"
      },
      "EnumChannelMode" : {
        "type" : "string",
        "enum" : [ "FireAndForget", "Reliable" ]
      },
      "HoleMakingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "HolePattern" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/HolePattern"
              },
              "minItems" : 1
            }
          },
          "required" : [ "HolePattern" ]
        } ]
      },
      "Polarity" : {
        "type" : "string",
        "enum" : [ "Negative", "Positive" ]
      },
      "Component" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Automation" : {
              "$ref" : "#/components/schemas/EnumAutomation"
            },
            "OverfoldSide" : {
              "$ref" : "#/components/schemas/Side"
            },
            "MediaRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "CartonTopFlaps" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "ProductType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ProductTypeDetails" : {
              "type" : "string"
            },
            "ReaderPageCount" : {
              "type" : "integer"
            },
            "Columns" : {
              "type" : "integer"
            },
            "Dimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "SurfaceCount" : {
              "type" : "integer"
            },
            "ContentRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id",
                "pattern" : "^[a-zA-Z_][\\w.-]*$"
              }
            },
            "MaxHeat" : {
              "type" : "number",
              "format" : "float"
            },
            "WindingResult" : {
              "type" : "integer"
            },
            "Overfold" : {
              "type" : "number",
              "format" : "float"
            },
            "IdentificationField" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/IdentificationField"
              }
            },
            "SurfaceMark" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/SurfaceMark"
              }
            }
          }
        } ]
      },
      "InkZoneCalculationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ZoneHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "ZonesY" : {
              "type" : "integer"
            },
            "Device" : {
              "$ref" : "#/components/schemas/Device"
            },
            "ZoneWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "PrintableArea" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "Zones" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "ConvertingConfig" : {
        "type" : "object",
        "properties" : {
          "SheetWidthMin" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetWidthMax" : {
            "type" : "number",
            "format" : "float"
          },
          "CutBlock" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/CutBlock"
            }
          },
          "MarginRight" : {
            "type" : "number",
            "format" : "float"
          },
          "Device" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Device"
            }
          },
          "MarginBottom" : {
            "type" : "number",
            "format" : "float"
          },
          "Media" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Media"
            }
          },
          "MarginTop" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetHeightMin" : {
            "type" : "number",
            "format" : "float"
          },
          "MarginLeft" : {
            "type" : "number",
            "format" : "float"
          },
          "SheetHeightMax" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "Condition" : {
        "type" : "object",
        "properties" : {
          "PartContext" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            },
            "minItems" : 1
          }
        },
        "required" : [ "Part" ]
      },
      "EnumAutomation" : {
        "type" : "string",
        "enum" : [ "Dynamic", "Static" ]
      },
      "StickOn" : {
        "type" : "object",
        "properties" : {
          "ChildRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Glue" : {
            "$ref" : "#/components/schemas/Glue"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Folio" : {
            "type" : "integer"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "ImageEnhancementOp" : {
        "type" : "object",
        "properties" : {
          "OperationDetails" : {
            "type" : "string"
          },
          "Operation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          }
        },
        "required" : [ "Operation" ]
      },
      "ThinPDFParams" : {
        "type" : "object",
        "properties" : {
          "SidelineImages" : {
            "type" : "boolean"
          },
          "FilePerPage" : {
            "type" : "boolean"
          },
          "SidelineFonts" : {
            "type" : "boolean"
          },
          "SidelineEPS" : {
            "type" : "boolean"
          }
        }
      },
      "EnumDeviceAxis" : {
        "type" : "string",
        "enum" : [ "None", "FeedDirection", "MediaWidth", "Both" ]
      },
      "ImageSetterParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AdvanceDistance" : {
              "type" : "number",
              "format" : "float"
            },
            "CutMedia" : {
              "type" : "boolean"
            },
            "MirrorAround" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "RollCut" : {
              "type" : "number",
              "format" : "float"
            },
            "BurnOutArea" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "ManualFeed" : {
              "type" : "boolean"
            },
            "CenterAcross" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            }
          }
        } ]
      },
      "FolderProduction" : {
        "type" : "object",
        "properties" : {
          "ModuleID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProductionType" : {
            "type" : "string",
            "enum" : [ "Collect", "NonCollect" ]
          }
        }
      },
      "GangQuFilter" : {
        "type" : "object",
        "properties" : {
          "GangNames" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "Severity" : {
        "type" : "string",
        "enum" : [ "Event", "Information", "Warning", "Error", "Fatal" ]
      },
      "CommandReturnQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ReturnQueueEntryParams" : {
              "$ref" : "#/components/schemas/ReturnQueueEntryParams"
            }
          },
          "required" : [ "ReturnQueueEntryParams" ]
        } ]
      },
      "CaseMakingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FrontFoldIn" : {
              "type" : "number",
              "format" : "float"
            },
            "JointWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            },
            "CoverWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "TopFoldIn" : {
              "type" : "number",
              "format" : "float"
            },
            "BottomFoldIn" : {
              "type" : "number",
              "format" : "float"
            },
            "Height" : {
              "type" : "number",
              "format" : "float"
            },
            "SpineWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "CornerType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "ProofItem" : { },
      "StatusQuParams" : {
        "type" : "object",
        "properties" : {
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Types" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "ResponseWakeUp" : {
        "$ref" : "#/components/schemas/Response"
      },
      "Command" : {
        "$ref" : "#/components/schemas/Message"
      },
      "BindIn" : {
        "type" : "object",
        "properties" : {
          "ChildRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Glue" : {
            "$ref" : "#/components/schemas/Glue"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Folio" : {
            "type" : "integer"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "IdentificationField" : {
        "type" : "object",
        "properties" : {
          "ValueFormat" : {
            "type" : "string"
          },
          "EncodingDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Position" : {
            "$ref" : "#/components/schemas/Face"
          },
          "Encoding" : {
            "type" : "string",
            "enum" : [ "ASCII", "Barcode", "Braille", "RFID" ]
          },
          "Purpose" : {
            "type" : "string",
            "enum" : [ "Label", "Separation", "Verification" ]
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "MetadataMap" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/MetadataMap"
            }
          },
          "ExtraValues" : {
            "$ref" : "#/components/schemas/ExtraValues"
          },
          "Format" : {
            "$ref" : "#/components/schemas/regExp"
          },
          "BoundingBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "Value" : {
            "type" : "string"
          },
          "BarcodeDetails" : {
            "$ref" : "#/components/schemas/BarcodeDetails"
          },
          "PurposeDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ValueTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "StitchingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "StitchPositions" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "NumberOfStitches" : {
              "type" : "integer"
            },
            "StapleShape" : {
              "$ref" : "#/components/schemas/StapleShape"
            },
            "Angle" : {
              "type" : "number",
              "format" : "float"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "StitchWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "WireGauge" : {
              "type" : "number",
              "format" : "float"
            },
            "StitchOrigin" : {
              "type" : "string",
              "enum" : [ "TrimBoxCenter", "TrimBoxJogSide", "UntrimmedJogSide" ]
            },
            "StitchType" : {
              "type" : "string",
              "enum" : [ "Corner", "Saddle", "Side" ]
            },
            "TightBacking" : {
              "type" : "string",
              "enum" : [ "Round", "RoundBacked", "Flat", "FlatBacked" ]
            },
            "Offset" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "UsageCounter" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Scope" : {
              "type" : "string",
              "enum" : [ "Lifetime", "PowerOn", "Job" ]
            },
            "CounterTypes" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            }
          },
          "required" : [ "Scope" ]
        } ]
      },
      "PageActivation" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Condition"
            },
            "minItems" : 1
          }
        },
        "required" : [ "Condition" ]
      },
      "Address" : {
        "type" : "object",
        "properties" : {
          "ExtendedAddress" : {
            "type" : "string"
          },
          "AddressUsage" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "CivicNumber" : {
            "type" : "string"
          },
          "AddressLine" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/textElement"
            }
          },
          "Country" : {
            "type" : "string"
          },
          "PostalCode" : {
            "type" : "string"
          },
          "Region" : {
            "type" : "string"
          },
          "Street" : {
            "type" : "string"
          },
          "City" : {
            "type" : "string"
          },
          "CountryCode" : {
            "type" : "string",
            "pattern" : "[A-Z][A-Z]"
          },
          "PostBox" : {
            "type" : "string"
          }
        }
      },
      "RepeatDesc" : {
        "type" : "object",
        "properties" : {
          "LayoutStyle" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "GutterY" : {
            "type" : "number",
            "format" : "float"
          },
          "GutterY2" : {
            "type" : "number",
            "format" : "float"
          },
          "ShapeDefRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "GutterX2" : {
            "type" : "number",
            "format" : "float"
          },
          "GutterX" : {
            "type" : "number",
            "format" : "float"
          },
          "AllowedRotate" : {
            "type" : "string",
            "enum" : [ "None", "Grain", "MinorGrain", "CrossGrain" ]
          },
          "UseBleed" : {
            "type" : "boolean"
          },
          "OrderQuantity" : {
            "type" : "integer"
          }
        },
        "required" : [ "ShapeDefRef" ]
      },
      "CreasingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Crease" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Crease"
              },
              "minItems" : 1
            }
          },
          "required" : [ "Crease" ]
        } ]
      },
      "ColorantControl" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceNSpace" : {
              "$ref" : "#/components/schemas/DeviceNSpace"
            },
            "ColorantConvertProcess" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "ColorantOrder" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "ColorantParams" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "MappingSelection" : {
              "type" : "string",
              "enum" : [ "UsePDLValues", "UseLocalPrinterValues", "UseProcessColorValues" ]
            },
            "ColorantAlias" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ColorantAlias"
              }
            },
            "ProcessColorModel" : {
              "type" : "string",
              "enum" : [ "DeviceCMY", "DeviceCMYK", "DeviceGray", "DeviceN", "DeviceRGB", "None" ]
            }
          }
        } ]
      },
      "SpecificResource" : {
        "type" : "object"
      },
      "ColorCorrectionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorCorrectionOp" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ColorCorrectionOp"
              }
            }
          }
        } ]
      },
      "sRGBColor" : {
        "minItems" : 3,
        "maxItems" : 3,
        "$ref" : "#/components/schemas/FloatList"
      },
      "MultiPageFold" : {
        "type" : "object",
        "properties" : {
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "BinderySignatureID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "BinderySignatureID", "Orientation" ]
      },
      "MiscConsumable" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "TypeDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Type" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Color" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "ColorDetails" : {
              "type" : "string"
            },
            "IdentificationField" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/IdentificationField"
              }
            },
            "Certification" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Certification"
              }
            }
          },
          "required" : [ "Type" ]
        } ]
      },
      "DeviceInfo" : {
        "type" : "object",
        "properties" : {
          "Status" : {
            "$ref" : "#/components/schemas/DeviceStatus"
          },
          "ProductionCounter" : {
            "type" : "number",
            "format" : "float"
          },
          "Speed" : {
            "type" : "number",
            "format" : "float"
          },
          "ModuleIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "ToolIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "JobPhase" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/JobPhase"
            }
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "IdleStartTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Device" : {
            "$ref" : "#/components/schemas/Device"
          },
          "Activity" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Activity"
            }
          },
          "PowerOnTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Employee" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Employee"
            }
          },
          "CounterUnit" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DeviceCondition" : {
            "$ref" : "#/components/schemas/DeviceCondition"
          },
          "FileSpec" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "maxItems" : 2
          },
          "ModuleInfo" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/ModuleInfo"
            }
          },
          "StatusDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Event" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Event"
            }
          },
          "TotalProductionCounter" : {
            "type" : "number",
            "format" : "float"
          },
          "HourCounter" : {
            "type" : "string",
            "format" : "duration"
          }
        },
        "required" : [ "Status" ]
      },
      "BindingQuality" : {
        "type" : "object",
        "properties" : {
          "FlexValue" : {
            "type" : "number",
            "format" : "float"
          },
          "PullOutValue" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "Sides" : {
        "type" : "string",
        "enum" : [ "OneSided", "OneSidedBack", "TwoSidedHeadToFoot", "TwoSidedHeadToHead" ]
      },
      "MarkElement" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Separation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MarkType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Rotation" : {
            "type" : "number",
            "format" : "float"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Center", "MarkType", "Separation" ]
      },
      "ImageCompressionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ImageCompression" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ImageCompression"
              },
              "minItems" : 1
            }
          },
          "required" : [ "ImageCompression" ]
        } ]
      },
      "shape" : {
        "minItems" : 3,
        "maxItems" : 3,
        "$ref" : "#/components/schemas/FloatList"
      },
      "EnumPreflightAction" : {
        "type" : "string",
        "enum" : [ "Abort", "Continue", "Repair" ]
      },
      "Position" : {
        "type" : "object",
        "properties" : {
          "PositionOrd" : {
            "type" : "integer"
          },
          "GangElementID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MarginRight" : {
            "type" : "number",
            "format" : "float"
          },
          "RelativeBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "StackOrd" : {
            "type" : "integer"
          },
          "StackDepth" : {
            "type" : "integer"
          },
          "MarginTop" : {
            "type" : "number",
            "format" : "float"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "BlockName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MarginBottom" : {
            "type" : "number",
            "format" : "float"
          },
          "BinderySignatureID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "AbsoluteBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "MarginLeft" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "FontPolicy" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "UseFontEmulation" : {
              "type" : "boolean"
            },
            "PreferredFont" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "UseDefaultFont" : {
              "type" : "boolean"
            }
          },
          "required" : [ "PreferredFont", "UseDefaultFont", "UseFontEmulation" ]
        } ]
      },
      "PDLCreationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FontParams" : {
              "$ref" : "#/components/schemas/FontParams"
            },
            "PDFCreationDetails" : {
              "$ref" : "#/components/schemas/PDFCreationDetails"
            },
            "PSCreationDetails" : {
              "$ref" : "#/components/schemas/PSCreationDetails"
            },
            "MimeType" : {
              "type" : "string"
            }
          },
          "required" : [ "MimeType" ]
        } ]
      },
      "ExposedMedia" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "PunchType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "MediaRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "PlateType" : {
              "type" : "string",
              "enum" : [ "Exposed", "Dummy" ]
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "IdentificationField" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/IdentificationField"
              }
            },
            "Resolution" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          },
          "required" : [ "MediaRef" ]
        } ]
      },
      "RuleLength" : {
        "type" : "object",
        "properties" : {
          "Length" : {
            "type" : "number",
            "format" : "float"
          },
          "DDESCutType" : {
            "type" : "integer"
          }
        },
        "required" : [ "DDESCutType", "Length" ]
      },
      "QueryGangStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "GangQuFilter" : {
              "$ref" : "#/components/schemas/GangQuFilter"
            }
          }
        } ]
      },
      "Person" : {
        "type" : "object",
        "properties" : {
          "NamePrefix" : {
            "type" : "string"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "AdditionalNames" : {
            "type" : "string"
          },
          "PhoneticFirstName" : {
            "type" : "string"
          },
          "FamilyName" : {
            "type" : "string"
          },
          "FirstName" : {
            "type" : "string"
          },
          "PhoneticLastName" : {
            "type" : "string"
          },
          "Languages" : {
            "$ref" : "#/components/schemas/languages"
          },
          "NameSuffix" : {
            "type" : "string"
          },
          "JobTitle" : {
            "type" : "string"
          }
        }
      },
      "WrappingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "WrappingKind" : {
              "type" : "string",
              "enum" : [ "Band", "LooseWrap", "ShrinkWrap" ]
            }
          },
          "required" : [ "WrappingKind" ]
        } ]
      },
      "SideStitching" : {
        "type" : "object",
        "properties" : {
          "StapleShape" : {
            "$ref" : "#/components/schemas/StapleShape"
          },
          "StitchNumber" : {
            "type" : "integer"
          }
        }
      },
      "LooseBinding" : {
        "type" : "object",
        "properties" : {
          "Brand" : {
            "type" : "string"
          },
          "HolePattern" : {
            "$ref" : "#/components/schemas/HolePattern"
          },
          "RingBinding" : {
            "$ref" : "#/components/schemas/RingBinding"
          },
          "CombBinding" : {
            "$ref" : "#/components/schemas/CombBinding"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "CoilBinding" : {
            "$ref" : "#/components/schemas/CoilBinding"
          },
          "ScrewBinding" : {
            "$ref" : "#/components/schemas/ScrewBinding"
          }
        }
      },
      "ObjectModel" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Dimensions" : {
            "$ref" : "#/components/schemas/shape"
          }
        }
      },
      "PrintQuality" : {
        "type" : "string",
        "enum" : [ "High", "Normal", "Draft" ]
      },
      "CollatingItem" : {
        "type" : "object",
        "properties" : {
          "Transformation" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "ComponentRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "TransformationContext" : {
            "type" : "string",
            "enum" : [ "CollateItem", "Component", "StackItem" ]
          },
          "Amount" : {
            "type" : "integer"
          }
        }
      },
      "CellCondition" : {
        "type" : "object",
        "properties" : {
          "Side" : {
            "$ref" : "#/components/schemas/Side"
          },
          "Condition" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Condition"
            },
            "minItems" : 1
          }
        },
        "required" : [ "Side", "Condition" ]
      },
      "Activation" : {
        "type" : "string",
        "enum" : [ "Informative", "Held", "Active", "PendingReturn", "Removed" ]
      },
      "URL" : {
        "type" : "string",
        "format" : "uri-reference"
      },
      "EmbossingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "EmbossingItem" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/EmbossingItem"
              },
              "minItems" : 1
            }
          },
          "required" : [ "EmbossingItem" ]
        } ]
      },
      "Side" : {
        "type" : "string",
        "enum" : [ "Back", "Front" ]
      },
      "Signal" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object",
          "properties" : {
            "ChannelMode" : {
              "$ref" : "#/components/schemas/EnumChannelMode"
            }
          }
        } ]
      },
      "FeedingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CollatingItem" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/CollatingItem"
              }
            },
            "Feeder" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Feeder"
              }
            }
          }
        } ]
      },
      "ColorSpaceConversionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ICCProfileUsage" : {
              "type" : "string",
              "enum" : [ "UsePDL", "UseSupplied" ]
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "ColorSpaceConversionOp" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ColorSpaceConversionOp"
              }
            }
          }
        } ]
      },
      "AmountPool" : {
        "type" : "object",
        "properties" : {
          "PartAmount" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/PartAmount"
            },
            "minItems" : 1
          }
        },
        "required" : [ "PartAmount" ]
      },
      "ScreeningParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ScreenSelector" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ScreenSelector"
              },
              "minItems" : 1
            },
            "IgnoreSourceFile" : {
              "type" : "boolean"
            }
          },
          "required" : [ "ScreenSelector" ]
        } ]
      },
      "AuditNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "Notification" : {
              "$ref" : "#/components/schemas/Notification"
            }
          },
          "required" : [ "Notification" ]
        } ]
      },
      "AuditCreated" : {
        "$ref" : "#/components/schemas/Audit"
      },
      "JobPhase" : {
        "type" : "object",
        "properties" : {
          "Status" : {
            "$ref" : "#/components/schemas/NodeStatus"
          },
          "ModuleIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "ToolIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "MISDetails" : {
            "$ref" : "#/components/schemas/MISDetails"
          },
          "Amount" : {
            "type" : "number",
            "format" : "float"
          },
          "RelatedJobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DeadLine" : {
            "type" : "string",
            "enum" : [ "InTime", "Late", "Warning" ]
          },
          "StartTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Activity" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Activity"
            }
          },
          "GangSource" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GangSource"
            }
          },
          "TotalAmount" : {
            "type" : "number",
            "format" : "float"
          },
          "PercentCompleted" : {
            "$ref" : "#/components/schemas/Percentage"
          },
          "Waste" : {
            "type" : "number",
            "format" : "float"
          },
          "CostCenterID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "WorkStepID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "StatusDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelatedJobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RestTime" : {
            "type" : "string",
            "format" : "duration"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "JobID", "Status" ]
      },
      "CutBlock" : {
        "type" : "object",
        "properties" : {
          "CutWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "BinderySignatureIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "BlockName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Box" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "Operations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "BlockName" ]
      },
      "Percentage" : {
        "type" : "number",
        "format" : "float",
        "maximum" : 100.0
      },
      "Use" : {
        "type" : "number",
        "format" : "float",
        "maximum" : 1.0
      },
      "SpreadType" : {
        "type" : "string",
        "enum" : [ "SinglePage", "Spread" ]
      },
      "JobField" : {
        "type" : "object",
        "properties" : {
          "JobTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "JobFormat" : {
            "type" : "string"
          }
        }
      },
      "MessageService" : {
        "type" : "object",
        "properties" : {
          "Type" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URLSchemes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "http", "https" ]
            }
          },
          "ResponseModes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "FireAndForget", "Reliable", "Response" ]
            }
          }
        },
        "required" : [ "Type" ]
      },
      "FloatList" : {
        "type" : "array",
        "items" : {
          "type" : "number",
          "format" : "float"
        }
      },
      "EnumDrying" : {
        "type" : "string",
        "enum" : [ "Heatset", "IR", "Off", "On", "UV" ]
      },
      "TabDimensions" : {
        "type" : "object",
        "properties" : {
          "TabsPerBank" : {
            "type" : "integer"
          },
          "TabWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "TabEdge" : {
            "$ref" : "#/components/schemas/Edge"
          },
          "TabExtensionDistance" : {
            "type" : "number",
            "format" : "float"
          },
          "TabOffset" : {
            "type" : "number",
            "format" : "float"
          },
          "TabSetCollationOrder" : {
            "type" : "string",
            "enum" : [ "Forward", "Reverse" ]
          }
        }
      },
      "FeedSheetLay" : {
        "type" : "string",
        "enum" : [ "Leading", "Trailing" ]
      },
      "PlacedObject" : {
        "type" : "object",
        "properties" : {
          "Ord" : {
            "type" : "integer"
          },
          "PageActivation" : {
            "$ref" : "#/components/schemas/PageActivation"
          },
          "SourceClipPath" : {
            "$ref" : "#/components/schemas/PDFPath"
          },
          "MarkObject" : {
            "$ref" : "#/components/schemas/MarkObject"
          },
          "ContentObject" : {
            "$ref" : "#/components/schemas/ContentObject"
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "PositionRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "ClipBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "TrimCTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "PageCondition" : {
            "$ref" : "#/components/schemas/PageCondition"
          },
          "ClipPath" : {
            "$ref" : "#/components/schemas/PDFPath"
          },
          "HalfTonePhaseOrigin" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "CTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "TrimSize" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "CTM" ]
      },
      "PreflightTest" : {
        "type" : "object",
        "properties" : {
          "TestID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Action" : {
            "$ref" : "#/components/schemas/EnumPreflightAction"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "Severity" : {
            "$ref" : "#/components/schemas/Severity"
          },
          "TestClass" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GeneralID" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GeneralID"
            }
          }
        }
      },
      "LabelingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Face" : {
              "$ref" : "#/components/schemas/Face"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Application" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Offset" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "FoldingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Fold" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Fold"
              }
            },
            "Cut" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Cut"
              }
            },
            "FoldCatalog" : {
              "$ref" : "#/components/schemas/FoldCatalog"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Crease" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Crease"
              }
            },
            "Perforate" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Perforate"
              }
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            },
            "FoldingDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "ReferenceXObjParams" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/FileSpec"
            }
          },
          "Mode" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Mode" ]
      },
      "ModifyQueueEntryParams" : {
        "type" : "object",
        "properties" : {
          "QueueFilter" : {
            "$ref" : "#/components/schemas/QueueFilter"
          },
          "PrevQueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Position" : {
            "type" : "integer"
          },
          "Priority" : {
            "type" : "integer"
          },
          "NextQueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GangName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Operation" : {
            "type" : "string",
            "enum" : [ "Abort", "Complete", "Hold", "Move", "Remove", "Resume", "SetGang", "Suspend" ]
          }
        },
        "required" : [ "Operation", "QueueFilter" ]
      },
      "DevelopingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "PreHeatTemp" : {
              "type" : "number",
              "format" : "float"
            },
            "PostBakeTemp" : {
              "type" : "number",
              "format" : "float"
            },
            "PostExposeTime" : {
              "type" : "string",
              "format" : "duration"
            },
            "PostBakeTime" : {
              "type" : "string",
              "format" : "duration"
            },
            "PreHeatTime" : {
              "type" : "string",
              "format" : "duration"
            }
          }
        } ]
      },
      "BendingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Punch" : {
              "type" : "boolean"
            },
            "PunchType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Bend" : {
              "type" : "boolean"
            }
          }
        } ]
      },
      "VariableIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "MinPages" : {
              "type" : "integer"
            },
            "MaxPages" : {
              "type" : "integer"
            },
            "Area" : {
              "type" : "number",
              "format" : "float"
            },
            "VariableType" : {
              "type" : "string",
              "enum" : [ "OneLine", "AddressField", "IdentificationField", "Area" ]
            },
            "NumberOfCopies" : {
              "type" : "integer"
            },
            "ColorsUsedBack" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "ChildRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id",
                "pattern" : "^[a-zA-Z_][\\w.-]*$"
              }
            },
            "ColorsUsedFront" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "VariableQuality" : {
              "type" : "string",
              "enum" : [ "Simple", "Imprint", "Full" ]
            },
            "AveragePages" : {
              "type" : "integer"
            }
          },
          "required" : [ "VariableType" ]
        } ]
      },
      "AuditResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceInfo" : {
              "$ref" : "#/components/schemas/ResourceInfo"
            }
          },
          "required" : [ "ResourceInfo" ]
        } ]
      },
      "TIFFtag" : {
        "type" : "object",
        "properties" : {
          "TagType" : {
            "type" : "integer"
          },
          "NumberValue" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "TagNumber" : {
            "type" : "integer"
          },
          "IntegerValue" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "BinaryValue" : {
            "type" : "string"
          },
          "StringValue" : {
            "type" : "string"
          }
        },
        "required" : [ "TagNumber", "TagType" ]
      },
      "NotificationFilter" : {
        "type" : "object",
        "properties" : {
          "MilestoneTypes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Classes" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "Event", "Information", "Warning", "Error", "Fatal" ]
            }
          }
        }
      },
      "MarkColor" : {
        "type" : "object",
        "properties" : {
          "Tint" : {
            "type" : "number",
            "format" : "float"
          },
          "Name" : {
            "type" : "string"
          }
        },
        "required" : [ "Name", "Tint" ]
      },
      "Tool" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ToolType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "SerialNumber" : {
              "type" : "string"
            },
            "IdentificationField" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/IdentificationField"
              }
            }
          }
        } ]
      },
      "BinderySignature" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "OverfoldSide" : {
              "type" : "string",
              "enum" : [ "Back", "BackHalf", "Front", "FrontHalf" ]
            },
            "SpreadType" : {
              "$ref" : "#/components/schemas/SpreadType"
            },
            "StaggerContinuous" : {
              "type" : "boolean"
            },
            "Bottling" : {
              "type" : "string",
              "enum" : [ "All", "Last", "None" ]
            },
            "SignatureCell" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/SignatureCell"
              }
            },
            "NumberUp" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "BindingOrientation" : {
              "$ref" : "#/components/schemas/Orientation"
            },
            "StaggerColumns" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "DieLayoutRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "FoldCatalog" : {
              "$ref" : "#/components/schemas/FoldCatalog"
            },
            "MultiPageFold" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/MultiPageFold"
              }
            },
            "BinderySignatureType" : {
              "type" : "string",
              "enum" : [ "Fold", "Grid", "Die" ]
            },
            "Overfold" : {
              "type" : "number",
              "format" : "float"
            },
            "StaggerRows" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "BinderySignatureSize" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          },
          "required" : [ "BinderySignatureType" ]
        } ]
      },
      "EdgeGluing" : {
        "type" : "object",
        "properties" : {
          "EdgeGlue" : {
            "$ref" : "#/components/schemas/EnumGlue"
          }
        }
      },
      "ResourceSet" : {
        "type" : "object",
        "properties" : {
          "Comment" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Comment"
            }
          },
          "Usage" : {
            "type" : "string",
            "enum" : [ "Input", "Output" ]
          },
          "CombinedProcessIndex" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "Resource" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Resource"
            }
          },
          "Dependent" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Dependent"
            }
          },
          "Unit" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GeneralID" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GeneralID"
            }
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "ProcessUsage" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Name" ]
      },
      "Certification" : {
        "type" : "object",
        "properties" : {
          "Identifier" : {
            "type" : "string"
          },
          "Organization" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Claim" : {
            "type" : "string"
          }
        }
      },
      "TransferCurve" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Curve" : {
              "$ref" : "#/components/schemas/TransferFunction"
            },
            "CTM" : {
              "$ref" : "#/components/schemas/matrix"
            }
          }
        } ]
      },
      "JPEG2000Params" : {
        "type" : "object",
        "properties" : {
          "NumResolutions" : {
            "type" : "integer"
          },
          "CodeBlockSize" : {
            "type" : "integer"
          },
          "ProgressionOrder" : {
            "type" : "string",
            "enum" : [ "LRCP", "RLCP", "RPCL", "PCRL", "CPRL" ]
          },
          "LayerRates" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "LayersPerTile" : {
            "type" : "integer"
          },
          "TileSize" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "JacketingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FoldingWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "FoldingDistance" : {
              "type" : "number",
              "format" : "float"
            }
          },
          "required" : [ "FoldingWidth" ]
        } ]
      },
      "AuditStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceInfo" : {
              "$ref" : "#/components/schemas/DeviceInfo"
            }
          },
          "required" : [ "DeviceInfo" ]
        } ]
      },
      "FitPolicy" : {
        "type" : "object",
        "properties" : {
          "MinGutter" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ExpansionPolicy" : {
            "type" : "string",
            "enum" : [ "HorizontalOnly", "HorizontalVertical", "VerticalOnly", "VerticalHorizontal" ]
          },
          "VerticalGridDirection" : {
            "type" : "string",
            "enum" : [ "BottomToTop", "TopToBottom" ]
          },
          "HorizontalGridDirection" : {
            "type" : "string",
            "enum" : [ "LeftToRight", "RightToLeft" ]
          },
          "ClipOffset" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "RotatePolicy" : {
            "type" : "string",
            "enum" : [ "NoRotate", "RotateOrthogonal", "RotateClockwise", "RotateCounterClockwise" ]
          },
          "SizePolicy" : {
            "type" : "string",
            "enum" : [ "Abort", "ClipToMaxPage", "CompleteGrid", "FillGrid", "FitToPage", "ReduceToFit", "Tile" ]
          },
          "GutterPolicy" : {
            "type" : "string",
            "enum" : [ "Distribute", "Fixed" ]
          }
        }
      },
      "ResponseStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "DeviceInfo" : {
              "$ref" : "#/components/schemas/DeviceInfo"
            }
          }
        } ]
      },
      "NetworkHeader" : {
        "type" : "object",
        "properties" : {
          "Value" : {
            "type" : "string"
          },
          "Name" : {
            "type" : "string"
          }
        },
        "required" : [ "Name", "Value" ]
      },
      "ResponseKnownDevices" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Device"
              }
            }
          }
        } ]
      },
      "Disposition" : {
        "type" : "object",
        "properties" : {
          "MinDuration" : {
            "type" : "string",
            "format" : "duration"
          },
          "ExtraDuration" : {
            "type" : "string",
            "format" : "duration"
          },
          "Priority" : {
            "type" : "integer"
          },
          "DispositionAction" : {
            "type" : "string",
            "enum" : [ "Delete", "Archive" ]
          },
          "Until" : {
            "type" : "string",
            "format" : "date-time"
          }
        }
      },
      "ResponseKnownSubscriptions" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionInfo" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/SubscriptionInfo"
              }
            }
          }
        } ]
      },
      "CommandResubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ResubmissionParams" : {
              "$ref" : "#/components/schemas/ResubmissionParams"
            }
          },
          "required" : [ "ResubmissionParams" ]
        } ]
      },
      "WebInlineFinishingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FolderProduction" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FolderProduction"
              }
            },
            "ProductionPath" : {
              "$ref" : "#/components/schemas/ProductionPath"
            }
          }
        } ]
      },
      "InterpretingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ScalingOrigin" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Center" : {
              "type" : "boolean"
            },
            "InterpretingDetails" : {
              "$ref" : "#/components/schemas/InterpretingDetails"
            },
            "PrintQuality" : {
              "$ref" : "#/components/schemas/PrintQuality"
            },
            "FilmRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "PlateRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "MirrorAround" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "FitPolicy" : {
              "$ref" : "#/components/schemas/FitPolicy"
            },
            "PDFInterpretingParams" : {
              "$ref" : "#/components/schemas/PDFInterpretingParams"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "Scaling" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "PaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "ProofPaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "ObjectResolution" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ObjectResolution"
              }
            }
          }
        } ]
      },
      "PalletizingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Pattern" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "LayerAmount" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "MaxWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "Overhang" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "MaxHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "OverhangOffset" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "PreflightCheck" : {
        "type" : "object",
        "properties" : {
          "Pages" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "TestID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "Action" : {
            "$ref" : "#/components/schemas/EnumPreflightAction"
          },
          "Severity" : {
            "$ref" : "#/components/schemas/Severity"
          },
          "TestClass" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Count" : {
            "type" : "integer"
          },
          "GeneralID" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GeneralID"
            }
          }
        }
      },
      "BarcodeReproParams" : {
        "type" : "object",
        "properties" : {
          "ModuleHeight" : {
            "type" : "number",
            "format" : "float"
          },
          "ModuleWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "BearerBars" : {
            "type" : "string",
            "enum" : [ "None", "TopBottom", "Box", "BoxHMarks" ]
          },
          "Height" : {
            "type" : "number",
            "format" : "float"
          },
          "Masking" : {
            "type" : "string",
            "enum" : [ "None", "WhiteBox" ]
          },
          "Ratio" : {
            "type" : "number",
            "format" : "float"
          },
          "Magnification" : {
            "type" : "number",
            "format" : "float"
          },
          "BarcodeCompParams" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/BarcodeCompParams"
            }
          }
        }
      },
      "Pallet" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "IdentificationField" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/IdentificationField"
              }
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "PalletType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "PalletType" ]
        } ]
      },
      "ExtraValues" : {
        "type" : "object",
        "properties" : {
          "Value" : {
            "type" : "string"
          },
          "Usage" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Usage", "Value" ]
      },
      "QueueSubmissionParams" : {
        "type" : "object",
        "properties" : {
          "PrevQueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Priority" : {
            "type" : "integer"
          },
          "ReturnJMF" : {
            "$ref" : "#/components/schemas/URL"
          },
          "GangPolicy" : {
            "$ref" : "#/components/schemas/EnumGangPolicy"
          },
          "Activation" : {
            "$ref" : "#/components/schemas/Activation"
          },
          "NextQueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GangName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "URL" ]
      },
      "PDFInterpretingParams" : {
        "type" : "object",
        "properties" : {
          "EmitPDFUCR" : {
            "type" : "boolean"
          },
          "EmitPDFHalftones" : {
            "type" : "boolean"
          },
          "ICCColorAsDeviceColor" : {
            "type" : "boolean"
          },
          "OCGProcess" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ReferenceXObjParams" : {
            "$ref" : "#/components/schemas/ReferenceXObjParams"
          },
          "OCGIntent" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "OCGZoom" : {
            "type" : "number",
            "format" : "float"
          },
          "TransparencyRenderingQuality" : {
            "type" : "number",
            "format" : "float"
          },
          "EmitPDFTransfers" : {
            "type" : "boolean"
          },
          "OCGControl" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/OCGControl"
            }
          },
          "EmitPDFBG" : {
            "type" : "boolean"
          },
          "HonorPDFOverprint" : {
            "type" : "boolean"
          },
          "PrintPDFAnnotations" : {
            "type" : "boolean"
          },
          "PrintTrapAnnotations" : {
            "type" : "boolean"
          }
        }
      },
      "PositionObj" : {
        "type" : "object",
        "properties" : {
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "RelativeSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "SizePolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          },
          "RotationPolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          },
          "CTM" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "RefAnchor" : {
            "$ref" : "#/components/schemas/RefAnchor"
          },
          "PageRange" : {
            "$ref" : "#/components/schemas/IntegerRange"
          },
          "PositionPolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          }
        }
      },
      "IntegerList" : {
        "type" : "array",
        "items" : {
          "type" : "integer"
        }
      },
      "StripMark" : {
        "type" : "object",
        "properties" : {
          "BarcodeReproParams" : {
            "$ref" : "#/components/schemas/BarcodeReproParams"
          },
          "RegisterMark" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/RegisterMark"
            }
          },
          "Font" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MarkName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelativeWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "RelativeHeight" : {
            "type" : "number",
            "format" : "float"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "CutMark" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/CutMark"
            }
          },
          "ScavengerArea" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/ScavengerArea"
            }
          },
          "AbsoluteWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "StripMarkDetails" : {
            "type" : "string"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "JobField" : {
            "$ref" : "#/components/schemas/JobField"
          },
          "RefAnchor" : {
            "$ref" : "#/components/schemas/RefAnchor"
          },
          "Offset" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "VerticalFitPolicy" : {
            "$ref" : "#/components/schemas/EnumFitPolicy"
          },
          "ColorControlStrip" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/ColorControlStrip"
            }
          },
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "PositionRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "FillMark" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/FillMark"
            }
          },
          "AbsoluteHeight" : {
            "type" : "number",
            "format" : "float"
          },
          "FontSize" : {
            "type" : "number",
            "format" : "float"
          },
          "HorizontalFitPolicy" : {
            "$ref" : "#/components/schemas/EnumFitPolicy"
          },
          "IdentificationField" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/IdentificationField"
            }
          }
        }
      },
      "Comment" : {
        "type" : "object",
        "properties" : {
          "PersonalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Type" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Language" : {
            "$ref" : "#/components/schemas/language"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Author" : {
            "type" : "string"
          },
          "Text" : {
            "type" : "string"
          },
          "TimeStamp" : {
            "type" : "string",
            "format" : "date-time"
          }
        }
      },
      "PartWaste" : {
        "type" : "object",
        "properties" : {
          "ModuleIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Waste" : {
            "type" : "number",
            "format" : "float"
          },
          "WasteDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Waste" ]
      },
      "ResponseNotification" : {
        "$ref" : "#/components/schemas/Response"
      },
      "DeliveryParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BuyerAccount" : {
              "type" : "string"
            },
            "Ownership" : {
              "type" : "string",
              "enum" : [ "Destination", "Origin" ]
            },
            "EarliestDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "Required" : {
              "type" : "string",
              "format" : "date-time"
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              },
              "maxItems" : 3
            },
            "Transfer" : {
              "type" : "string",
              "enum" : [ "BuyerToPrinterDeliver", "BuyerToPrinterPickup", "PrinterToBuyerDeliver", "PrinterToBuyerPickup" ]
            },
            "RequiredDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "Earliest" : {
              "type" : "string",
              "format" : "date-time"
            },
            "Method" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "TrackingID" : {
              "type" : "string"
            },
            "DropItem" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/DropItem"
              }
            }
          }
        } ]
      },
      "LooseBindingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "HolePattern" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/HolePattern"
              }
            },
            "ScrewBindingDetails" : {
              "$ref" : "#/components/schemas/ScrewBindingDetails"
            },
            "CoverMaterial" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "StripBindingDetails" : {
              "$ref" : "#/components/schemas/StripBindingDetails"
            },
            "BindingType" : {
              "type" : "string",
              "enum" : [ "ChannelBinding", "CoilBinding", "CombBinding", "RingBinding", "ScrewBinding", "StripBinding" ]
            },
            "ChannelBindingDetails" : {
              "$ref" : "#/components/schemas/ChannelBindingDetails"
            },
            "CombBindingDetails" : {
              "$ref" : "#/components/schemas/CombBindingDetails"
            },
            "CoilBindingDetails" : {
              "$ref" : "#/components/schemas/CoilBindingDetails"
            },
            "RingBindingDetails" : {
              "$ref" : "#/components/schemas/RingBindingDetails"
            }
          },
          "required" : [ "BindingType" ]
        } ]
      },
      "CombBinding" : {
        "type" : "object",
        "properties" : {
          "CombShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Material" : {
            "$ref" : "#/components/schemas/LooseBindMaterial"
          }
        }
      },
      "QueueEntry" : {
        "type" : "object",
        "properties" : {
          "Status" : {
            "$ref" : "#/components/schemas/NodeStatus"
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Priority" : {
            "type" : "integer"
          },
          "GangPolicy" : {
            "$ref" : "#/components/schemas/EnumGangPolicy"
          },
          "RelatedJobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SubmissionTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "StartTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Activation" : {
            "$ref" : "#/components/schemas/Activation"
          },
          "GangSource" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GangSource"
            }
          },
          "GangName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "StatusDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelatedJobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "QueueEntryID", "Status" ]
      },
      "LayoutShift" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ShiftPoint" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ShiftPoint"
              },
              "minItems" : 1
            }
          },
          "required" : [ "ShiftPoint" ]
        } ]
      },
      "CommandWakeUp" : {
        "$ref" : "#/components/schemas/Command"
      },
      "Edge" : {
        "type" : "string",
        "enum" : [ "Bottom", "Left", "Right", "Top" ]
      },
      "ColorSpaceConversionOp" : {
        "type" : "object",
        "properties" : {
          "ScreenSelector" : {
            "$ref" : "#/components/schemas/ScreenSelector"
          },
          "SourceRenderingIntent" : {
            "$ref" : "#/components/schemas/RenderingIntent"
          },
          "RGBGray2Black" : {
            "type" : "boolean"
          },
          "PreserveBlack" : {
            "type" : "boolean"
          },
          "Operation" : {
            "type" : "string",
            "enum" : [ "Convert", "Tag", "Untag" ]
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "BlackPointCompensationDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FileSpec" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "maxItems" : 3
          },
          "RGBGray2BlackThreshold" : {
            "type" : "number",
            "format" : "float"
          },
          "BlackPointCompensation" : {
            "type" : "boolean"
          },
          "SourceCS" : {
            "type" : "string",
            "enum" : [ "All", "CalGray", "Calibrated", "CalRGB", "CIEBased", "CMYK", "DeviceCMYK", "DeviceGray", "DeviceN", "DeviceRGB", "DevIndep", "Gray", "ICCBased", "ICCCMYK", "ICCGray", "ICCLAB", "ICCRGB", "Lab", "RGB", "Separation", "YUV" ]
          },
          "RenderingIntent" : {
            "$ref" : "#/components/schemas/RenderingIntent"
          }
        },
        "required" : [ "Operation" ]
      },
      "RenderingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BandWidth" : {
              "type" : "integer"
            },
            "ColorantDepth" : {
              "type" : "integer"
            },
            "TIFFFormatParams" : {
              "$ref" : "#/components/schemas/TIFFFormatParams"
            },
            "BandOrdering" : {
              "type" : "string",
              "enum" : [ "BandMajor", "ColorMajor" ]
            },
            "AutomatedOverPrintParams" : {
              "$ref" : "#/components/schemas/AutomatedOverPrintParams"
            },
            "Interleaved" : {
              "type" : "boolean"
            },
            "BandHeight" : {
              "type" : "integer"
            },
            "ObjectResolution" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ObjectResolution"
              }
            },
            "MimeType" : {
              "type" : "string"
            }
          }
        } ]
      },
      "Activity" : {
        "type" : "object",
        "properties" : {
          "PersonalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Comment" : {
            "$ref" : "#/components/schemas/Comment"
          },
          "ActivityName" : {
            "type" : "string"
          },
          "EndTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "ActivityID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "StartTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Roles" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "AuditProcessRun" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Audit"
        }, {
          "type" : "object",
          "properties" : {
            "ProcessRun" : {
              "$ref" : "#/components/schemas/ProcessRun"
            }
          },
          "required" : [ "ProcessRun" ]
        } ]
      },
      "SourceObjects" : {
        "type" : "array",
        "items" : {
          "type" : "string",
          "enum" : [ "ImagePhotographic", "ImageScreenShot", "LineArt", "SmoothShades", "Text" ]
        }
      },
      "ResponseStopPersistentChannel" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionInfo" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/SubscriptionInfo"
              }
            }
          }
        } ]
      },
      "BundleType" : {
        "type" : "string",
        "enum" : [ "BoundSet", "Box", "Carton", "CollectedStack", "CompensatedStack", "Pallet", "Product", "Roll", "Sheet", "Stack", "StrappedStack", "StrappedCompensatedStack", "WrappedBundle" ]
      },
      "RasterReadingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ScalingOrigin" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Center" : {
              "type" : "boolean"
            },
            "MirrorAround" : {
              "$ref" : "#/components/schemas/EnumDeviceAxis"
            },
            "FitPolicy" : {
              "$ref" : "#/components/schemas/FitPolicy"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "Scaling" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "FilmRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "PaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "ProofPaperRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "PlateRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            }
          }
        } ]
      },
      "MediaType" : {
        "type" : "string",
        "enum" : [ "Blanket", "CorrugatedBoard", "Disc", "EmbossingFoil", "Film", "Foil", "GravureCylinder", "ImagingCylinder", "LaminatingFoil", "MountingTape", "Other", "Paper", "Plate", "Screen", "SelfAdhesive", "ShrinkFoil", "Sleeve", "Synthetic", "Textile", "Transparency", "Vinyl" ]
      },
      "LaminatingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ModuleID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "LaminatingMethod" : {
              "type" : "string",
              "enum" : [ "CompoundFoil", "DispersionGlue", "Fusing" ]
            },
            "NipWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "Temperature" : {
              "type" : "number",
              "format" : "float"
            },
            "LaminatingBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "GapList" : {
              "$ref" : "#/components/schemas/FloatList"
            }
          }
        } ]
      },
      "PrintCondition" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorantOrder" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "PrintQuality" : {
              "$ref" : "#/components/schemas/PrintQuality"
            },
            "Name" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "Name" ]
        } ]
      },
      "Cut" : {
        "type" : "object",
        "properties" : {
          "CutWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/EnumTopBottom"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "DeviceFilter" : {
        "type" : "object",
        "properties" : {
          "DeviceDetails" : {
            "type" : "string",
            "enum" : [ "Brief", "Modules", "Full" ]
          }
        }
      },
      "SignalKnownDevices" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "Device" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Device"
              }
            }
          }
        } ]
      },
      "DCTParams" : {
        "type" : "object",
        "properties" : {
          "QFactor" : {
            "type" : "number",
            "format" : "float"
          },
          "ColorTransform" : {
            "type" : "string",
            "enum" : [ "None", "YUV", "Automatic" ]
          },
          "HSamples" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "VSamples" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "QuantTable" : {
            "type" : "string"
          },
          "HuffTable" : {
            "type" : "string"
          }
        }
      },
      "RunList" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "SourceBleedBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "Automation" : {
              "$ref" : "#/components/schemas/EnumAutomation"
            },
            "DocPages" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "OrdType" : {
              "type" : "string",
              "enum" : [ "Content", "Insert", "Reservation" ]
            },
            "FinishedPages" : {
              "type" : "integer"
            },
            "EndOfDocument" : {
              "type" : "boolean"
            },
            "NPage" : {
              "type" : "integer"
            },
            "ContentRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id",
                "pattern" : "^[a-zA-Z_][\\w.-]*$"
              }
            },
            "Pages" : {
              "$ref" : "#/components/schemas/IntegerRange"
            },
            "SourceClipBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "MetadataMap" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/MetadataMap"
              }
            },
            "SourceMediaBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "ByteMap" : {
              "$ref" : "#/components/schemas/ByteMap"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Sets" : {
              "$ref" : "#/components/schemas/IntegerRange"
            },
            "ClipPath" : {
              "$ref" : "#/components/schemas/PDFPath"
            },
            "SourceTrimBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "Docs" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "EndOfSet" : {
              "type" : "boolean"
            },
            "LogicalPage" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "Header" : {
        "type" : "object",
        "properties" : {
          "PersonalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "AgentVersion" : {
            "type" : "string"
          },
          "DeviceID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Author" : {
            "type" : "string"
          },
          "Time" : {
            "type" : "string",
            "format" : "date-time"
          },
          "AgentName" : {
            "type" : "string"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "refID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ICSVersions" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "DeviceID", "Time" ]
      },
      "Expr" : {
        "type" : "object",
        "properties" : {
          "Path" : {
            "$ref" : "#/components/schemas/XPath"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Name", "Path" ]
      },
      "BundleItem" : {
        "type" : "object",
        "properties" : {
          "TotalWeight" : {
            "type" : "number",
            "format" : "float"
          },
          "BundleType" : {
            "$ref" : "#/components/schemas/BundleType"
          },
          "TotalDimensions" : {
            "$ref" : "#/components/schemas/shape"
          },
          "BundleItem" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/BundleItem"
            }
          },
          "Amount" : {
            "type" : "integer"
          },
          "TotalVolume" : {
            "type" : "number",
            "format" : "float"
          },
          "ItemRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "TotalAmount" : {
            "type" : "integer"
          },
          "BundleItemName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Amount" ]
      },
      "InsertingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FinishedPage" : {
              "type" : "integer"
            },
            "Method" : {
              "type" : "string",
              "enum" : [ "BindIn", "BlowIn" ]
            },
            "Glue" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Glue"
              }
            },
            "InsertLocation" : {
              "type" : "string",
              "enum" : [ "Back", "FinishedPage", "Front", "Overfold" ]
            }
          },
          "required" : [ "InsertLocation" ]
        } ]
      },
      "WindingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Fixation" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Length" : {
              "type" : "number",
              "format" : "float"
            },
            "Copies" : {
              "type" : "integer"
            },
            "Diameter" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "BindingQualityParams" : {
        "type" : "object",
        "properties" : {
          "FlexValue" : {
            "type" : "number",
            "format" : "float"
          },
          "PullOutValue" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "BindingQualityMeasurement" : {
        "type" : "object",
        "properties" : {
          "FlexValue" : {
            "type" : "number",
            "format" : "float"
          },
          "PullOutValue" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "ResponseReturnQueueEntry" : {
        "$ref" : "#/components/schemas/Response"
      },
      "ProcessRun" : {
        "type" : "object",
        "properties" : {
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Start" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "SubmissionTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "EndStatus" : {
            "type" : "string",
            "enum" : [ "Aborted", "Completed" ]
          },
          "ReturnTime" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Duration" : {
            "type" : "string",
            "format" : "duration"
          },
          "End" : {
            "type" : "string",
            "format" : "date-time"
          }
        },
        "required" : [ "End", "EndStatus", "Start" ]
      },
      "StopPersChParams" : {
        "type" : "object",
        "properties" : {
          "ChannelID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MessageType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        }
      },
      "Band" : {
        "type" : "object",
        "properties" : {
          "Width" : {
            "type" : "integer"
          },
          "Height" : {
            "type" : "integer"
          }
        }
      },
      "XYPair" : {
        "minItems" : 2,
        "maxItems" : 2,
        "$ref" : "#/components/schemas/FloatList"
      },
      "SheetLay" : {
        "type" : "string",
        "enum" : [ "Center", "Left", "Right" ]
      },
      "BlowIn" : {
        "type" : "object",
        "properties" : {
          "ChildRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "FolioTo" : {
            "type" : "integer"
          },
          "FolioFrom" : {
            "type" : "integer"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "ShapeDefProductionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ObjectModel" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ObjectModel"
              }
            },
            "ShapeTemplate" : {
              "$ref" : "#/components/schemas/ShapeTemplate"
            }
          }
        } ]
      },
      "Face" : {
        "type" : "string",
        "enum" : [ "Back", "Bottom", "Front", "Left", "Right", "Top" ]
      },
      "CommandRequestQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "RequestQueueEntryParams" : {
              "$ref" : "#/components/schemas/RequestQueueEntryParams"
            }
          }
        } ]
      },
      "LayoutIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Pages" : {
              "type" : "integer"
            },
            "FinishedDimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "SpreadType" : {
              "$ref" : "#/components/schemas/SpreadType"
            },
            "Dimensions" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "NamedDimensions" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Orientation" : {
              "$ref" : "#/components/schemas/Orientation"
            },
            "NumberUp" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Bleed" : {
              "type" : "number",
              "format" : "float"
            },
            "Sides" : {
              "$ref" : "#/components/schemas/Sides"
            }
          }
        } ]
      },
      "ResponsePipeControl" : {
        "$ref" : "#/components/schemas/Response"
      },
      "CutMark" : {
        "type" : "object",
        "properties" : {
          "MarkType" : {
            "type" : "string",
            "enum" : [ "CrossCutMark", "TopVerticalCutMark", "BottomVerticalCutMark", "LeftHorizontalCutMark", "RightHorizontalCutMark", "LowerLeftCutMark", "UpperLeftCutMark", "LowerRightCutMark", "UpperRightCutMark" ]
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "MarkType", "Position" ]
      },
      "HolePattern" : {
        "type" : "object",
        "properties" : {
          "Pattern" : {
            "type" : "string",
            "enum" : [ "None", "S1-generic", "S-generic", "R2-generic", "R2m-DIN", "R2m-ISO", "R2m-MIB", "R2i-US-a", "R2i-US-b", "R3-generic", "R3i-US", "R4-generic", "R4m-DIN-A4", "R4m-DIN-A5", "R4m-swedish", "R4i-US", "R5-generic", "R5i-US-a", "R5i-US-b", "R5i-US-c", "R6-generic", "R6m-4h2s", "R6m-DIN-A5", "R7-generic", "R7i-US-a", "R7i-US-b", "R7i-US-c", "R11m-7h4s", "P16_9i-rect-0t", "P12m-rect-0t", "W2_1i-round-0t", "W2_1i-square-0t", "W3_1i-square-0t", "C9.5m-round-0t" ]
          },
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "CenterReference" : {
            "type" : "string",
            "enum" : [ "RegistrationMark", "TrailingEdge" ]
          },
          "Shape" : {
            "type" : "string",
            "enum" : [ "Elliptic", "Rectangular", "Round" ]
          },
          "Extent" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Pitch" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Reinforcement" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ReferenceEdge" : {
            "type" : "string",
            "enum" : [ "Bottom", "Left", "Pattern", "Right", "Top" ]
          },
          "HoleCount" : {
            "$ref" : "#/components/schemas/IntegerList"
          }
        }
      },
      "ResponseRequestQueueEntry" : {
        "$ref" : "#/components/schemas/Response"
      },
      "languages" : {
        "type" : "array",
        "items" : {
          "$ref" : "#/components/schemas/language"
        }
      },
      "InterpretingDetails" : {
        "type" : "object",
        "properties" : {
          "MinLineWidth" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "MediaDirection" : {
        "type" : "string",
        "enum" : [ "Any", "SameDirection", "XDirection", "YDirection" ]
      },
      "MarkObject" : {
        "type" : "object",
        "properties" : {
          "ColorControlStrip" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/ColorControlStrip"
            }
          },
          "CutMark" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/CutMark"
            }
          },
          "ScavengerArea" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/ScavengerArea"
            }
          },
          "ContentRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "RegisterMark" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/RegisterMark"
            }
          }
        }
      },
      "MediaIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "ISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "BackCoating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "BuyerSupplied" : {
              "type" : "boolean"
            },
            "Flute" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Texture" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "BackISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "Weight" : {
              "type" : "number",
              "format" : "float"
            },
            "Certification" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Certification"
              }
            },
            "Brand" : {
              "type" : "string"
            },
            "LabColorValue" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "PrePrinted" : {
              "type" : "boolean"
            },
            "Thickness" : {
              "type" : "number",
              "format" : "float"
            },
            "FluteDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "StockType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "MediaType" : {
              "$ref" : "#/components/schemas/MediaType"
            },
            "Coating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "MediaColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "Opacity" : {
              "$ref" : "#/components/schemas/EnumOpacity"
            },
            "GrainDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "MediaColorDetails" : {
              "type" : "string"
            },
            "MediaQuality" : {
              "type" : "string"
            },
            "MediaTypeDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "MediaType" ]
        } ]
      },
      "EmbossingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ModuleID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Emboss" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Emboss"
              },
              "minItems" : 1
            }
          },
          "required" : [ "Emboss" ]
        } ]
      },
      "Glue" : {
        "type" : "object",
        "properties" : {
          "GluingPattern" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "WorkingDirection" : {
            "$ref" : "#/components/schemas/Face"
          },
          "AreaGlue" : {
            "type" : "boolean"
          },
          "GluingTechnique" : {
            "type" : "string",
            "enum" : [ "SpineGluing", "SideGluingFront", "SideGluingBack" ]
          },
          "WorkingPath" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "GlueLineWidth" : {
            "type" : "number",
            "format" : "float"
          },
          "GlueRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "GlueType" : {
            "type" : "string",
            "enum" : [ "ColdGlue", "Hotmelt", "Permanent", "PUR", "Removable" ]
          },
          "MeltingTemperature" : {
            "type" : "integer"
          },
          "StartPosition" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "Event" : {
        "type" : "object",
        "properties" : {
          "EventValue" : {
            "type" : "string"
          },
          "EventID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "EventID" ]
      },
      "SurfaceColor" : {
        "type" : "object",
        "properties" : {
          "ColorsUsed" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "PrintStandard" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Coverage" : {
            "type" : "number",
            "format" : "float"
          },
          "Coatings" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Certification" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Certification"
            }
          },
          "Surface" : {
            "$ref" : "#/components/schemas/Side"
          }
        },
        "required" : [ "Surface" ]
      },
      "BundlingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Length" : {
              "type" : "number",
              "format" : "float"
            },
            "Copies" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "ISOPaperSubstrate" : {
        "type" : "string",
        "enum" : [ "PS1", "PS2", "PS3", "PS4", "PS5", "PS6", "PS7", "PS8", "LWCPlus", "LWCStandard", "NewsPlus", "SCPlus", "SCStandard", "SNP" ]
      },
      "QueryQueueStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "QueueStatusParams" : {
              "$ref" : "#/components/schemas/QueueStatusParams"
            }
          }
        } ]
      },
      "FeederQualityParams" : {
        "type" : "object",
        "properties" : {
          "DoubleFeeds" : {
            "type" : "integer"
          },
          "IncorrectComponentQuality" : {
            "$ref" : "#/components/schemas/EnumFeedQuality"
          },
          "IncorrectComponents" : {
            "type" : "integer"
          },
          "BadFeedQuality" : {
            "$ref" : "#/components/schemas/EnumFeedQuality"
          },
          "BadFeeds" : {
            "type" : "integer"
          },
          "DoubleFeedQuality" : {
            "$ref" : "#/components/schemas/EnumFeedQuality"
          }
        }
      },
      "QueryStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "StatusQuParams" : {
              "$ref" : "#/components/schemas/StatusQuParams"
            },
            "Languages" : {
              "$ref" : "#/components/schemas/languages"
            }
          }
        } ]
      },
      "EnumGlue" : {
        "type" : "string",
        "enum" : [ "ColdGlue", "Hotmelt", "PUR" ]
      },
      "InsertSheet" : {
        "type" : "object",
        "properties" : {
          "MediaRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "SheetType" : {
            "type" : "string",
            "enum" : [ "AccountingSheet", "ErrorSheet", "JobSheet", "SeparatorSheet" ]
          },
          "IsWaste" : {
            "type" : "boolean"
          },
          "SheetFormat" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SheetUsage" : {
            "type" : "string",
            "enum" : [ "Header", "Interleaved", "InterleavedBefore", "OnError", "Slip", "SlipCopy", "Trailer" ]
          },
          "StripMark" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/StripMark"
            }
          }
        },
        "required" : [ "SheetType", "SheetUsage" ]
      },
      "DeviceNColor" : {
        "type" : "object",
        "properties" : {
          "ColorList" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "ColorList", "Name" ]
      },
      "SheetOptimizingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Policy" : {
              "type" : "string",
              "enum" : [ "All", "Collect", "Optimized" ]
            },
            "GangElement" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/GangElement"
              },
              "minItems" : 1
            },
            "ConvertingConfig" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ConvertingConfig"
              }
            }
          },
          "required" : [ "GangElement" ]
        } ]
      },
      "CommandStopPersistentChannel" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "StopPersChParams" : {
              "$ref" : "#/components/schemas/StopPersChParams"
            }
          },
          "required" : [ "StopPersChParams" ]
        } ]
      },
      "LooseBindMaterial" : {
        "type" : "string",
        "enum" : [ "Steel", "ColorCoatedSteel", "Plastic" ]
      },
      "PipeParams" : {
        "type" : "object",
        "properties" : {
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PipeID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "MISDetails" : {
            "$ref" : "#/components/schemas/MISDetails"
          },
          "Operation" : {
            "type" : "string",
            "enum" : [ "Close", "Pause", "Pull", "Push" ]
          },
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "JobID", "Operation", "PipeID" ]
      },
      "DieLayoutProductionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Estimate" : {
              "type" : "boolean"
            },
            "RepeatDesc" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/RepeatDesc"
              },
              "minItems" : 1
            },
            "Position" : {
              "$ref" : "#/components/schemas/Anchor"
            },
            "ConvertingConfig" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ConvertingConfig"
              },
              "minItems" : 1
            }
          },
          "required" : [ "ConvertingConfig", "RepeatDesc" ]
        } ]
      },
      "ScrewBinding" : {
        "type" : "object",
        "properties" : {
          "Material" : {
            "$ref" : "#/components/schemas/LooseBindMaterial"
          }
        }
      },
      "EmbossType" : {
        "type" : "string",
        "enum" : [ "BlindEmbossing", "Braille", "EmbossedFinish", "FoilEmbossing", "FoilStamping" ]
      },
      "PreviewGenerationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AspectRatio" : {
              "type" : "string",
              "enum" : [ "CenterMax", "CenterMin", "Crop", "Expand", "Ignore" ]
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "Resolution" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "LaminatingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Thickness" : {
              "type" : "number",
              "format" : "float"
            },
            "Temperature" : {
              "type" : "string",
              "enum" : [ "Hot", "Cold" ]
            },
            "Texture" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Surface" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Side"
              }
            }
          },
          "required" : [ "Surface" ]
        } ]
      },
      "QueryResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "Languages" : {
              "$ref" : "#/components/schemas/languages"
            },
            "ResourceQuParams" : {
              "$ref" : "#/components/schemas/ResourceQuParams"
            }
          },
          "required" : [ "ResourceQuParams" ]
        } ]
      },
      "Milestone" : {
        "type" : "object",
        "properties" : {
          "MilestoneType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TypeAmount" : {
            "type" : "integer"
          }
        },
        "required" : [ "MilestoneType" ]
      },
      "LZWParams" : {
        "type" : "object",
        "properties" : {
          "Predictor" : {
            "type" : "integer"
          },
          "EarlyChange" : {
            "type" : "integer"
          }
        }
      },
      "Inspection" : {
        "type" : "object",
        "properties" : {
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "Defect" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Defect"
            }
          }
        }
      },
      "ReturnQueueEntryParams" : {
        "type" : "object",
        "properties" : {
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "QueueEntryID", "URL" ]
      },
      "CoverApplicationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Glue"
              }
            },
            "Score" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Score"
              }
            }
          }
        } ]
      },
      "Score" : {
        "type" : "object",
        "properties" : {
          "Side" : {
            "type" : "string",
            "enum" : [ "FromInside", "FromOutside" ]
          },
          "Offset" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "Offset", "Side" ]
      },
      "InkZoneProfile" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ZoneHeight" : {
              "type" : "number",
              "format" : "float"
            },
            "ZoneWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "ZoneSettingsX" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "ZoneSettingsY" : {
              "$ref" : "#/components/schemas/FloatList"
            }
          },
          "required" : [ "ZoneSettingsX", "ZoneWidth" ]
        } ]
      },
      "ContentCheckIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "ProofItem" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ProofItem"
              }
            },
            "PreflightItem" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/PreflightItem"
              }
            }
          }
        } ]
      },
      "CustomerInfo" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "CustomerJobName" : {
              "type" : "string"
            },
            "CustomerID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "CustomerProjectID" : {
              "type" : "string"
            },
            "CustomerOrderID" : {
              "type" : "string"
            }
          }
        } ]
      },
      "TIFFFormatParams" : {
        "type" : "object",
        "properties" : {
          "SeparationNameTag" : {
            "type" : "integer"
          },
          "RowsPerStrip" : {
            "type" : "integer"
          },
          "Segmentation" : {
            "type" : "string",
            "enum" : [ "SingleStrip", "Stripped", "Tiled" ]
          },
          "WhiteIsZero" : {
            "type" : "boolean"
          },
          "Interleaving" : {
            "type" : "integer"
          },
          "ByteOrder" : {
            "type" : "string",
            "enum" : [ "II", "MM" ]
          },
          "TileSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "TIFFtag" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/TIFFtag"
            }
          },
          "TIFFEmbeddedFile" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/TIFFEmbeddedFile"
            }
          }
        }
      },
      "GangCmdFilter" : {
        "type" : "object",
        "properties" : {
          "Policy" : {
            "type" : "string",
            "enum" : [ "All", "Optimized" ]
          },
          "GangNames" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        }
      },
      "VerificationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Tolerance" : {
              "type" : "number",
              "format" : "float"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            }
          }
        } ]
      },
      "AssemblingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "BindIn" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/BindIn"
              }
            },
            "BlowIn" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/BlowIn"
              }
            },
            "Container" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "StickOn" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/StickOn"
              }
            },
            "AssemblyItem" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/AssemblyItem"
              }
            }
          },
          "required" : [ "Container" ]
        } ]
      },
      "ApprovalPerson" : {
        "type" : "object",
        "properties" : {
          "ApprovalRoleDetails" : {
            "type" : "string"
          },
          "ContactRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "ApprovalRole" : {
            "type" : "string",
            "enum" : [ "Approvinator", "Informative", "Obligated" ]
          }
        },
        "required" : [ "ContactRef" ]
      },
      "WorkStyle" : {
        "type" : "string",
        "enum" : [ "Perfecting", "Simplex", "WorkAndBack", "WorkAndTumble", "WorkAndTurn" ]
      },
      "ProductionIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "PrintProcess" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Certification" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Certification"
              }
            },
            "PrintPreference" : {
              "type" : "string",
              "enum" : [ "Balanced", "CostEffective", "Fastest", "HighestQuality" ]
            }
          }
        } ]
      },
      "PartAmount" : {
        "type" : "object",
        "properties" : {
          "PartWaste" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/PartWaste"
            }
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "Amount" : {
            "type" : "number",
            "format" : "float"
          },
          "MinAmount" : {
            "type" : "number",
            "format" : "float"
          },
          "Waste" : {
            "type" : "number",
            "format" : "float"
          },
          "MaxAmount" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "AssemblyItem" : {
        "type" : "object",
        "properties" : {
          "ChildRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          }
        },
        "required" : [ "ChildRef" ]
      },
      "QueueStatusParams" : {
        "type" : "object",
        "properties" : {
          "QueueFilter" : {
            "$ref" : "#/components/schemas/QueueFilter"
          },
          "UpdateGranularity" : {
            "$ref" : "#/components/schemas/UpdateGranularity"
          }
        }
      },
      "ResponseResubmitQueueEntry" : {
        "$ref" : "#/components/schemas/Response"
      },
      "TrimmingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "TrimCover" : {
              "type" : "string",
              "enum" : [ "Back", "Both", "Front", "Neither" ]
            },
            "TrimmingOffset" : {
              "type" : "number",
              "format" : "float"
            },
            "Height" : {
              "type" : "number",
              "format" : "float"
            },
            "Width" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "XJDF" : {
        "$schema" : "https://json-schema.org/draft/2020-12/schema",
        "type" : "object",
        "properties" : {
          "Types" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Comment" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Comment"
            }
          },
          "Category" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RelatedJobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProjectID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ResourceSet" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/ResourceSet"
            }
          },
          "RelatedProjectID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "GeneralID" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GeneralID"
            }
          },
          "ProductList" : {
            "$ref" : "#/components/schemas/ProductList"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "Version" : {
            "$ref" : "#/components/schemas/Version"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "RelatedJobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "AuditPool" : {
            "$ref" : "#/components/schemas/AuditPool"
          },
          "ICSVersions" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "JobID", "Types" ]
      },
      "QualityControlResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Passed" : {
              "type" : "integer"
            },
            "BindingQualityMeasurement" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/BindingQualityMeasurement"
              }
            },
            "Measurements" : {
              "type" : "integer"
            },
            "Position" : {
              "$ref" : "#/components/schemas/Face"
            },
            "Start" : {
              "type" : "string",
              "format" : "date-time"
            },
            "Failed" : {
              "type" : "integer"
            },
            "Sample" : {
              "$ref" : "#/components/schemas/IntegerRange"
            },
            "Inspection" : {
              "$ref" : "#/components/schemas/Inspection"
            },
            "Box" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "Severity" : {
              "$ref" : "#/components/schemas/Score"
            },
            "ColorMeasurement" : {
              "$ref" : "#/components/schemas/ColorMeasurement"
            },
            "MeasurementUsage" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ "Master", "Standard" ]
              }
            },
            "SourceDeviceID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "End" : {
              "type" : "string",
              "format" : "date-time"
            },
            "QualityControlMethods" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "BindingQuality" : {
              "$ref" : "#/components/schemas/BindingQuality"
            },
            "RegistrationQuality" : {
              "$ref" : "#/components/schemas/RegistrationQuality"
            }
          }
        } ]
      },
      "EnumIncludeResources" : {
        "type" : "string",
        "enum" : [ "IncludeNever", "IncludeOncePerDoc", "IncludeOncePerPage" ]
      },
      "QualityControlParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BindingQualityParams" : {
              "$ref" : "#/components/schemas/BindingQualityParams"
            },
            "TimeInterval" : {
              "type" : "string",
              "format" : "duration"
            },
            "Position" : {
              "$ref" : "#/components/schemas/Face"
            },
            "Box" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "Severity" : {
              "$ref" : "#/components/schemas/Score"
            },
            "ColorMeasurement" : {
              "$ref" : "#/components/schemas/ColorMeasurement"
            },
            "SourceDeviceID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "QualityBase" : {
              "type" : "string",
              "enum" : [ "Absolute", "Standard" ]
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              },
              "maxItems" : 2
            },
            "QualityControlMethods" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "SampleInterval" : {
              "type" : "integer"
            },
            "BindingQuality" : {
              "$ref" : "#/components/schemas/BindingQuality"
            },
            "RegistrationQuality" : {
              "$ref" : "#/components/schemas/RegistrationQuality"
            }
          }
        } ]
      },
      "ScrewBindingDetails" : {
        "type" : "object",
        "properties" : {
          "Length" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "FlateParams" : {
        "type" : "object",
        "properties" : {
          "Predictor" : {
            "type" : "integer"
          }
        }
      },
      "Scope" : {
        "type" : "string",
        "enum" : [ "Allowed", "Device", "Estimate", "Job", "Present" ]
      },
      "ColorantAlias" : {
        "type" : "object",
        "properties" : {
          "ColorantName" : {
            "type" : "string"
          },
          "RawName" : {
            "type" : "string"
          },
          "ReplacementColorantName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "ColorantName", "ReplacementColorantName" ]
      },
      "Coating" : {
        "type" : "string",
        "enum" : [ "Coated", "Gloss", "Matte", "None", "Satin" ]
      },
      "ShutDownCmdParams" : {
        "type" : "object",
        "properties" : {
          "ShutDownType" : {
            "type" : "string",
            "enum" : [ "StandBy", "Full" ]
          }
        }
      },
      "CommandForceGang" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "GangCmdFilter" : {
              "$ref" : "#/components/schemas/GangCmdFilter"
            }
          },
          "required" : [ "GangCmdFilter" ]
        } ]
      },
      "ColorMeasurementConditions" : {
        "type" : "object",
        "properties" : {
          "MeasurementMode" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DensityStandard" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "InkState" : {
            "type" : "string",
            "enum" : [ "Dry", "Wet" ]
          },
          "SpectralResolution" : {
            "type" : "number",
            "format" : "float"
          },
          "Aperture" : {
            "type" : "number",
            "format" : "float"
          },
          "MeasurementAngle" : {
            "type" : "integer"
          },
          "IlluminationAngle" : {
            "type" : "integer"
          },
          "WhiteBase" : {
            "type" : "string",
            "enum" : [ "Absolute", "Substrate" ]
          },
          "Observer" : {
            "type" : "integer"
          },
          "Illumination" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SampleBacking" : {
            "type" : "string",
            "enum" : [ "Black", "Substrate", "White" ]
          },
          "MeasurementFilter" : {
            "type" : "string",
            "enum" : [ "None", "Pol", "UV" ]
          }
        }
      },
      "BoxFoldingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BlankDimensionsY" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "BlankDimensionsX" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "BoxFoldAction" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/BoxFoldAction"
              }
            },
            "BoxFoldingType" : {
              "type" : "string",
              "enum" : [ "Type00", "Type01", "Type02", "Type03", "Type04", "Type10", "Type11", "Type12", "Type13", "Type15", "Type20" ]
            }
          },
          "required" : [ "BoxFoldingType" ]
        } ]
      },
      "PDFXParams" : {
        "type" : "object",
        "properties" : {
          "PDFXCheck" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "PDFXNoTrimBoxError" : {
            "type" : "boolean"
          },
          "PDFXCompliantPDFOnly" : {
            "type" : "boolean"
          },
          "FileSpec" : {
            "$ref" : "#/components/schemas/FileSpec"
          },
          "PDFXTrimBoxToMediaBoxOffset" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "PDFXSetBleedBoxToMediaBox" : {
            "type" : "boolean"
          },
          "PDFXTrapped" : {
            "type" : "string",
            "enum" : [ "Unknown", "false", "true" ]
          },
          "PDFXBleedBoxtoTrimBoxOffset" : {
            "$ref" : "#/components/schemas/rectangle"
          }
        }
      },
      "IconList" : {
        "type" : "object",
        "properties" : {
          "Icon" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Icon"
            },
            "minItems" : 1
          }
        },
        "required" : [ "Icon" ]
      },
      "ShiftPoint" : {
        "type" : "object",
        "properties" : {
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "CTM" : {
            "$ref" : "#/components/schemas/matrix"
          }
        },
        "required" : [ "CTM", "Position" ]
      },
      "ShrinkingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Temperature" : {
              "type" : "number",
              "format" : "float"
            },
            "ShrinkingMethod" : {
              "type" : "string",
              "enum" : [ "ShrinkCool", "ShrinkHot" ]
            }
          }
        } ]
      },
      "GangElement" : {
        "type" : "object",
        "properties" : {
          "MediaRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "PlacedQuantity" : {
            "type" : "integer"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SeparationListFront" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "CustomerID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DeliveryDate" : {
            "type" : "string",
            "format" : "date-time"
          },
          "RotationPolicy" : {
            "$ref" : "#/components/schemas/PositionPolicy"
          },
          "NPage" : {
            "type" : "integer"
          },
          "NumberUp" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "MinQuantity" : {
            "type" : "integer"
          },
          "OrderQuantity" : {
            "type" : "integer"
          },
          "BinderySignatureIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "MaxQuantity" : {
            "type" : "integer"
          },
          "PageDimension" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "DueDate" : {
            "type" : "string",
            "format" : "date-time"
          },
          "Operations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "GangElementID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Priority" : {
            "type" : "integer"
          },
          "Media" : {
            "$ref" : "#/components/schemas/Media"
          },
          "GroupCode" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SeparationListBack" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Dimension" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "CollapseBleeds" : {
            "type" : "boolean"
          },
          "GeneralID" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GeneralID"
            }
          },
          "RunList" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/RunList"
            }
          },
          "RunListRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "FillPriority" : {
            "type" : "integer"
          },
          "GrainDirection" : {
            "$ref" : "#/components/schemas/MediaDirection"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "OneSheet" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "GangElementID", "OrderQuantity" ]
      },
      "BarcodeDetails" : {
        "type" : "object",
        "properties" : {
          "BarcodeVersion" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "XCells" : {
            "type" : "integer"
          },
          "ErrorCorrectionLevel" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "YCells" : {
            "type" : "integer"
          }
        }
      },
      "OCGControl" : {
        "type" : "object",
        "properties" : {
          "OCGName" : {
            "type" : "string"
          },
          "ProcStepsGroup" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProcStepsType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "IncludeOCG" : {
            "type" : "boolean"
          }
        },
        "required" : [ "IncludeOCG" ]
      },
      "Subscription" : {
        "type" : "object",
        "properties" : {
          "Languages" : {
            "$ref" : "#/components/schemas/languages"
          },
          "ChannelMode" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/EnumChannelMode"
            }
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "RepeatTime" : {
            "type" : "number",
            "format" : "float"
          }
        },
        "required" : [ "URL" ]
      },
      "BlockPreparationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "RegisterRibbon" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/RegisterRibbon"
              }
            },
            "Rounding" : {
              "type" : "number",
              "format" : "float"
            },
            "Backing" : {
              "type" : "number",
              "format" : "float"
            },
            "TightBacking" : {
              "$ref" : "#/components/schemas/TightBacking"
            }
          }
        } ]
      },
      "ResourceInfo" : {
        "type" : "object",
        "properties" : {
          "Speed" : {
            "type" : "number",
            "format" : "float"
          },
          "Types" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "MISDetails" : {
            "$ref" : "#/components/schemas/MISDetails"
          },
          "TotalAmount" : {
            "type" : "number",
            "format" : "float"
          },
          "ResourceSet" : {
            "$ref" : "#/components/schemas/ResourceSet"
          },
          "CommandResult" : {
            "type" : "string",
            "enum" : [ "Merged", "New", "Rejected", "Removed", "Replaced" ]
          },
          "ModuleID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Scope" : {
            "$ref" : "#/components/schemas/Scope"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Event" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Event"
            }
          },
          "Level" : {
            "type" : "string",
            "enum" : [ "Empty", "Full", "High", "Low", "OK" ]
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "ResourceSet" ]
      },
      "CommandSubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "QueueSubmissionParams" : {
              "$ref" : "#/components/schemas/QueueSubmissionParams"
            }
          },
          "required" : [ "QueueSubmissionParams" ]
        } ]
      },
      "StapleShape" : {
        "type" : "string",
        "enum" : [ "Butted", "ClinchOut", "Crown", "Eyelet", "Overlap" ]
      },
      "ColorIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "SurfaceColor" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/SurfaceColor"
              },
              "maxItems" : 2
            }
          }
        } ]
      },
      "EndSheetGluingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "$ref" : "#/components/schemas/Glue"
            }
          },
          "required" : [ "Glue" ]
        } ]
      },
      "Station" : {
        "type" : "object",
        "properties" : {
          "StationName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ShapeDefRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "BinderySignatureIDs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "StationName" ]
      },
      "PSCreationDetails" : {
        "type" : "object",
        "properties" : {
          "BinaryOK" : {
            "type" : "boolean"
          },
          "IgnoreSeparableImagesOnly" : {
            "type" : "boolean"
          },
          "SuppressRotate" : {
            "type" : "boolean"
          },
          "GeneratePageStreams" : {
            "type" : "boolean"
          },
          "ShrinkToFit" : {
            "type" : "boolean"
          },
          "IgnoreDSC" : {
            "type" : "boolean"
          },
          "SetupProcsets" : {
            "type" : "boolean"
          },
          "TTasT42" : {
            "type" : "boolean"
          },
          "IncludeCIDFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IgnoreHalftones" : {
            "type" : "boolean"
          },
          "IgnoreRawData" : {
            "type" : "boolean"
          },
          "BoundingBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "IncludeType3Fonts" : {
            "type" : "string",
            "enum" : [ "IncludeOncePerPage" ]
          },
          "IgnoreExternStreamRef" : {
            "type" : "boolean"
          },
          "IgnorePageRotation" : {
            "type" : "boolean"
          },
          "IgnoreOverprint" : {
            "type" : "boolean"
          },
          "OutputType" : {
            "type" : "string",
            "enum" : [ "EPS", "PostScript" ]
          },
          "SetPageSize" : {
            "type" : "boolean"
          },
          "IgnoreBG" : {
            "type" : "boolean"
          },
          "CenterCropBox" : {
            "type" : "boolean"
          },
          "Scale" : {
            "type" : "number",
            "format" : "float"
          },
          "IgnoreAnnotForms" : {
            "type" : "boolean"
          },
          "IgnoreColorSeps" : {
            "type" : "boolean"
          },
          "IgnoreShowPage" : {
            "type" : "boolean"
          },
          "PSLevel" : {
            "type" : "integer"
          },
          "IncludeOtherResources" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IgnoreTransfers" : {
            "type" : "boolean"
          },
          "IgnoreTTFontsFirst" : {
            "type" : "boolean"
          },
          "IncludeType1Fonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "UseFontAliasNames" : {
            "type" : "boolean"
          },
          "IncludeEmbeddedFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeProcSets" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "IncludeTrueTypeFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          },
          "SuppressCenter" : {
            "type" : "boolean"
          },
          "IgnoreUCR" : {
            "type" : "boolean"
          },
          "IncludeBaseFonts" : {
            "$ref" : "#/components/schemas/EnumIncludeResources"
          }
        }
      },
      "RingBinding" : {
        "type" : "object",
        "properties" : {
          "RingShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ViewBinder" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "BinderMaterial" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "RivetsExposed" : {
            "type" : "boolean"
          }
        }
      },
      "VerificationResult" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Rejected" : {
              "type" : "integer"
            },
            "Unknown" : {
              "type" : "integer"
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              },
              "maxItems" : 4
            },
            "Accepted" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "FoldCatalog" : {
        "type" : "string",
        "pattern" : "F[0-9]+-([0-9]+|X)"
      },
      "NodeInfo" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Status" : {
              "$ref" : "#/components/schemas/NodeStatus"
            },
            "FirstStart" : {
              "type" : "string",
              "format" : "date-time"
            },
            "SetupDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "LastStart" : {
              "type" : "string",
              "format" : "date-time"
            },
            "Start" : {
              "type" : "string",
              "format" : "date-time"
            },
            "MISDetails" : {
              "$ref" : "#/components/schemas/MISDetails"
            },
            "NaturalLang" : {
              "$ref" : "#/components/schemas/language"
            },
            "JobPriority" : {
              "type" : "integer"
            },
            "GangSource" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/GangSource"
              }
            },
            "LastEnd" : {
              "type" : "string",
              "format" : "date-time"
            },
            "TotalDuration" : {
              "type" : "string",
              "format" : "duration"
            },
            "PersonalID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "DueLevel" : {
              "type" : "string",
              "enum" : [ "Trivial", "Penalty", "JobCancelled" ]
            },
            "FirstEnd" : {
              "type" : "string",
              "format" : "date-time"
            },
            "StatusDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "End" : {
              "type" : "string",
              "format" : "date-time"
            },
            "CleanupDuration" : {
              "type" : "string",
              "format" : "duration"
            }
          }
        } ]
      },
      "ResponseSubmitQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "QueueEntry" : {
              "$ref" : "#/components/schemas/QueueEntry"
            }
          }
        } ]
      },
      "PDFCreationDetails" : {
        "type" : "object",
        "properties" : {
          "Binding" : {
            "type" : "string",
            "enum" : [ "Left", "Right" ]
          },
          "CompressPages" : {
            "type" : "boolean"
          },
          "ThinPDFParams" : {
            "$ref" : "#/components/schemas/ThinPDFParams"
          },
          "PDFVersion" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "InitialResolution" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "AllowJBIG2Globals" : {
            "type" : "boolean"
          },
          "AdvancedParams" : {
            "$ref" : "#/components/schemas/AdvancedParams"
          },
          "PDFXParams" : {
            "$ref" : "#/components/schemas/PDFXParams"
          },
          "DefaultRenderingIntent" : {
            "$ref" : "#/components/schemas/RenderingIntent"
          },
          "DetectBlend" : {
            "type" : "boolean"
          },
          "OverPrintMode" : {
            "type" : "integer"
          },
          "ASCII85EncodePages" : {
            "type" : "boolean"
          },
          "DoThumbnails" : {
            "type" : "boolean"
          },
          "InitialPageSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "AutoRotatePages" : {
            "type" : "string",
            "enum" : [ "None", "All", "PageByPage" ]
          },
          "Optimize" : {
            "type" : "boolean"
          }
        }
      },
      "VarnishingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ModuleID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ModuleType" : {
              "type" : "string",
              "enum" : [ "PrintModule", "CoatingModule" ]
            },
            "VarnishArea" : {
              "type" : "string",
              "enum" : [ "Full", "Spot" ]
            },
            "VarnishMethod" : {
              "type" : "string",
              "enum" : [ "Blanket", "Plate", "Independent" ]
            }
          }
        } ]
      },
      "ObjectResolution" : {
        "type" : "object",
        "properties" : {
          "AntiAliasing" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          },
          "Resolution" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Resolution" ]
      },
      "Module" : {
        "type" : "object",
        "properties" : {
          "ModuleID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ModuleType" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "ManufacturerURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "Revision" : {
            "type" : "string"
          },
          "SerialNumber" : {
            "type" : "string"
          },
          "Manufacturer" : {
            "type" : "string"
          },
          "IdentificationField" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/IdentificationField"
            }
          }
        },
        "required" : [ "ModuleID" ]
      },
      "SurfaceMark" : {
        "type" : "object",
        "properties" : {
          "ColorControlStrip" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/ColorControlStrip"
            }
          },
          "CutMark" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/CutMark"
            }
          },
          "ScavengerArea" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/ScavengerArea"
            }
          },
          "RegisterMark" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/RegisterMark"
            }
          },
          "Surface" : {
            "$ref" : "#/components/schemas/Face"
          }
        },
        "required" : [ "Surface" ]
      },
      "ImageEnhancementParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ImageEnhancementOp" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ImageEnhancementOp"
              },
              "minItems" : 1
            }
          },
          "required" : [ "ImageEnhancementOp" ]
        } ]
      },
      "QueryNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "NotificationFilter" : {
              "$ref" : "#/components/schemas/NotificationFilter"
            },
            "Languages" : {
              "$ref" : "#/components/schemas/languages"
            }
          }
        } ]
      },
      "Shape" : {
        "type" : "object",
        "properties" : {
          "CutBox" : {
            "$ref" : "#/components/schemas/rectangle"
          },
          "ShapeDepth" : {
            "type" : "number",
            "format" : "float"
          },
          "TeethPerDimension" : {
            "type" : "number",
            "format" : "float"
          },
          "CutPath" : {
            "$ref" : "#/components/schemas/PDFPath"
          },
          "DDESCutType" : {
            "type" : "integer"
          },
          "CutOut" : {
            "type" : "boolean"
          },
          "ShapeType" : {
            "type" : "string",
            "enum" : [ "Path", "Rectangular", "Round", "RoundedRectangle" ]
          }
        },
        "required" : [ "ShapeType" ]
      },
      "NamedColor" : {
        "type" : "string",
        "enum" : [ "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen" ]
      },
      "CMYKColor" : {
        "minItems" : 4,
        "maxItems" : 4,
        "$ref" : "#/components/schemas/FloatList"
      },
      "SignatureCell" : {
        "type" : "object",
        "properties" : {
          "BleedFace" : {
            "type" : "number",
            "format" : "float"
          },
          "FrontSpread" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "TrimFoot" : {
            "type" : "number",
            "format" : "float"
          },
          "Mask" : {
            "type" : "string",
            "enum" : [ "BleedBox", "DieCut", "None", "PDL", "SourceBleedBox", "SourceTrimBox", "TrimBox" ]
          },
          "TrimFace" : {
            "type" : "number",
            "format" : "float"
          },
          "CellCondition" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/CellCondition"
            }
          },
          "Orientation" : {
            "type" : "string",
            "enum" : [ "Down", "Left", "Right", "Up" ]
          },
          "BleedSpine" : {
            "type" : "number",
            "format" : "float"
          },
          "BleedHead" : {
            "type" : "number",
            "format" : "float"
          },
          "MaskBleed" : {
            "type" : "number",
            "format" : "float"
          },
          "StationName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "BackSpread" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "BackPages" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "MaskSeparation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "TrimHead" : {
            "type" : "number",
            "format" : "float"
          },
          "BleedFoot" : {
            "type" : "number",
            "format" : "float"
          },
          "FaceCells" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "FrontPages" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "Sides" : {
            "$ref" : "#/components/schemas/Sides"
          },
          "TrimSize" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "ShapeDimension" : {
        "type" : "object",
        "properties" : {
          "Value" : {
            "type" : "number",
            "format" : "float"
          },
          "Usage" : {
            "type" : "string"
          }
        },
        "required" : [ "Usage", "Value" ]
      },
      "FoldingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "Fold" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Fold"
              }
            },
            "FoldCatalog" : {
              "$ref" : "#/components/schemas/FoldCatalog"
            },
            "Crease" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Crease"
              }
            },
            "Perforate" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Perforate"
              }
            },
            "Orientation" : {
              "$ref" : "#/components/schemas/Orientation"
            },
            "FoldingDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "DensityMeasuringField" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceCyan" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Separation" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ToleranceDotGain" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceYellow" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Density" : {
            "$ref" : "#/components/schemas/FloatList"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          },
          "DotGain" : {
            "type" : "number",
            "format" : "float"
          },
          "ToleranceBlack" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToleranceMagenta" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Center", "Density", "Diameter", "DotGain", "Separation" ]
      },
      "CommandModifyQueueEntry" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Command"
        }, {
          "type" : "object",
          "properties" : {
            "ModifyQueueEntryParams" : {
              "$ref" : "#/components/schemas/ModifyQueueEntryParams"
            }
          },
          "required" : [ "ModifyQueueEntryParams" ]
        } ]
      },
      "DeviceNSpace" : {
        "type" : "object",
        "properties" : {
          "Name" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "Name", "Separations" ]
      },
      "SignalNotification" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "Notification" : {
              "$ref" : "#/components/schemas/Notification"
            }
          },
          "required" : [ "Notification" ]
        } ]
      },
      "BarcodeProductionParams" : {
        "type" : "object",
        "properties" : {
          "BarcodeReproParams" : {
            "$ref" : "#/components/schemas/BarcodeReproParams"
          },
          "IdentificationField" : {
            "$ref" : "#/components/schemas/IdentificationField"
          }
        }
      },
      "CuttingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Cut" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Cut"
              }
            },
            "CutBlock" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/CutBlock"
              }
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            }
          }
        } ]
      },
      "CoilBinding" : {
        "type" : "object",
        "properties" : {
          "CoilShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Material" : {
            "$ref" : "#/components/schemas/LooseBindMaterial"
          }
        }
      },
      "IntegerRange" : {
        "minItems" : 2,
        "maxItems" : 2,
        "$ref" : "#/components/schemas/IntegerList"
      },
      "SheetOptimizingReport" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AreaUse" : {
              "$ref" : "#/components/schemas/Use"
            },
            "BackUse" : {
              "$ref" : "#/components/schemas/Use"
            },
            "UniqueUse" : {
              "$ref" : "#/components/schemas/Use"
            },
            "DateSpread" : {
              "type" : "string",
              "format" : "duration"
            },
            "PrintableArea" : {
              "$ref" : "#/components/schemas/Use"
            },
            "OrderQuantity" : {
              "type" : "integer"
            },
            "PrintedWaste" : {
              "$ref" : "#/components/schemas/Use"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Positions" : {
              "type" : "integer"
            },
            "WasteQuantity" : {
              "type" : "integer"
            },
            "UniquePositions" : {
              "type" : "integer"
            },
            "VolumeUse" : {
              "$ref" : "#/components/schemas/Use"
            }
          },
          "required" : [ "AreaUse", "VolumeUse" ]
        } ]
      },
      "StrappingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "StrapPositions" : {
              "$ref" : "#/components/schemas/FloatList"
            },
            "StrappingType" : {
              "type" : "string",
              "enum" : [ "Single", "Double", "Cross", "DoubleCross" ]
            }
          },
          "required" : [ "StrappingType" ]
        } ]
      },
      "ComChannel" : {
        "type" : "object",
        "properties" : {
          "DescriptiveName" : {
            "type" : "string"
          },
          "Locator" : {
            "type" : "string"
          },
          "ChannelType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ChannelUsage" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "ChannelType", "Locator" ]
      },
      "SignalResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceInfo" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ResourceInfo"
              }
            }
          }
        } ]
      },
      "GeneralID" : {
        "type" : "object",
        "properties" : {
          "DataType" : {
            "type" : "string",
            "enum" : [ "boolean", "dateTime", "duration", "float", "integer", "NamedFeature", "NMTOKEN", "string" ]
          },
          "IDValue" : {
            "type" : "string"
          },
          "IDUsage" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "IDUsage", "IDValue" ]
      },
      "TransferFunction" : {
        "$ref" : "#/components/schemas/FloatList"
      },
      "FillMark" : {
        "type" : "object",
        "properties" : {
          "KnockoutRefs" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            }
          },
          "KnockoutSource" : {
            "type" : "string",
            "enum" : [ "ClipPath", "SourceClipPath", "TrimBox" ]
          },
          "KnockoutBleed" : {
            "type" : "number",
            "format" : "float"
          },
          "MarkColor" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/MarkColor"
            },
            "minItems" : 1
          }
        },
        "required" : [ "KnockoutSource", "MarkColor" ]
      },
      "ByteMap" : {
        "type" : "object",
        "properties" : {
          "BandOrdering" : {
            "type" : "string",
            "enum" : [ "BandMajor", "ColorMajor" ]
          },
          "Interleaved" : {
            "type" : "boolean"
          },
          "FrameWidth" : {
            "type" : "integer"
          },
          "Halftoned" : {
            "type" : "boolean"
          },
          "PixelSkip" : {
            "type" : "integer"
          },
          "FrameHeight" : {
            "type" : "integer"
          },
          "PixelColorants" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Band" : {
            "$ref" : "#/components/schemas/Band"
          },
          "PixelDepth" : {
            "type" : "integer"
          },
          "Resolution" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "QueryKnownDevices" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Query"
        }, {
          "type" : "object",
          "properties" : {
            "Languages" : {
              "$ref" : "#/components/schemas/languages"
            },
            "DeviceFilter" : {
              "$ref" : "#/components/schemas/DeviceFilter"
            }
          }
        } ]
      },
      "FileSpec" : {
        "type" : "object",
        "properties" : {
          "ResourceUsage" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FileTemplate" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Encoding" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FileFormat" : {
            "type" : "string"
          },
          "NPage" : {
            "type" : "integer"
          },
          "MimeType" : {
            "type" : "string"
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "UID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "CheckSum" : {
            "type" : "string"
          },
          "NetworkHeader" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/NetworkHeader"
            }
          },
          "Disposition" : {
            "$ref" : "#/components/schemas/Disposition"
          },
          "SearchDepth" : {
            "type" : "integer"
          },
          "UserFileName" : {
            "type" : "string"
          },
          "OverwritePolicy" : {
            "type" : "string",
            "enum" : [ "Overwrite", "RenameNew", "RenameOld", "NewVersion", "OperatorIntervention", "Abort" ]
          },
          "FileSize" : {
            "type" : "integer",
            "format" : "int64"
          },
          "Password" : {
            "type" : "string"
          }
        }
      },
      "PageCondition" : {
        "type" : "object",
        "properties" : {
          "Condition" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Condition"
            },
            "minItems" : 1
          }
        },
        "required" : [ "Condition" ]
      },
      "LayoutElementProductionParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ShapeDefRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "ContentRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id",
                "pattern" : "^[a-zA-Z_][\\w.-]*$"
              }
            }
          }
        } ]
      },
      "StripBindingDetails" : {
        "type" : "object",
        "properties" : {
          "Length" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "Company" : {
        "type" : "object",
        "properties" : {
          "OrganizationName" : {
            "type" : "string"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "OrganizationalUnit" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/textElement"
            }
          },
          "CompanyID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "OrganizationName" ]
      },
      "ResponseResource" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "ResourceInfo" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ResourceInfo"
              }
            }
          }
        } ]
      },
      "ResponseGangStatus" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "GangInfo" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/GangInfo"
              }
            }
          }
        } ]
      },
      "BindingIntent" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/ProductIntent"
        }, {
          "type" : "object",
          "properties" : {
            "SoftCoverBinding" : {
              "$ref" : "#/components/schemas/SoftCoverBinding"
            },
            "BindingColorDetails" : {
              "type" : "string"
            },
            "CoverColorDetails" : {
              "type" : "string"
            },
            "EdgeGluing" : {
              "$ref" : "#/components/schemas/EdgeGluing"
            },
            "BindingColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "HardCoverBinding" : {
              "$ref" : "#/components/schemas/HardCoverBinding"
            },
            "BindingSide" : {
              "$ref" : "#/components/schemas/Edge"
            },
            "BindingType" : {
              "type" : "string",
              "enum" : [ "AdhesiveNote", "ChannelBinding", "CoilBinding", "CombBinding", "CornerStitch", "EdgeGluing", "HardCover", "LooseBinding", "None", "RingBinding", "SaddleStitch", "ScrewBinding", "SideStitch", "SoftCover", "StripBinding", "Tape", "WireComb" ]
            },
            "BindingOrder" : {
              "type" : "string",
              "enum" : [ "None", "Collecting", "Gathering" ]
            },
            "ChildRefs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "format" : "id",
                "pattern" : "^[a-zA-Z_][\\w.-]*$"
              },
              "minItems" : 2
            },
            "BackCoverColorDetails" : {
              "type" : "string"
            },
            "Tabs" : {
              "$ref" : "#/components/schemas/Tabs"
            },
            "AdhesiveNote" : {
              "$ref" : "#/components/schemas/AdhesiveNote"
            },
            "SaddleStitching" : {
              "$ref" : "#/components/schemas/SaddleStitching"
            },
            "BackCoverColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "CoverColor" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "SideStitching" : {
              "$ref" : "#/components/schemas/SideStitching"
            },
            "LooseBinding" : {
              "$ref" : "#/components/schemas/LooseBinding"
            }
          },
          "required" : [ "BindingType" ]
        } ]
      },
      "TrappingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ImageToObjectTrapping" : {
              "type" : "boolean"
            },
            "StepLimit" : {
              "type" : "number",
              "format" : "float"
            },
            "TrapColorScaling" : {
              "type" : "number",
              "format" : "float"
            },
            "MinimumBlackWidth" : {
              "type" : "number",
              "format" : "float"
            },
            "TrapWidth" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "ImageInternalTrapping" : {
              "type" : "boolean"
            },
            "ImageToImageTrapping" : {
              "type" : "boolean"
            },
            "ImageMaskTrapping" : {
              "type" : "boolean"
            }
          }
        } ]
      },
      "GangSource" : {
        "type" : "object",
        "properties" : {
          "BinderySignatureID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Copies" : {
            "type" : "integer"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Copies", "JobID" ]
      },
      "SpinePreparationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "NotchingDistance" : {
              "type" : "number",
              "format" : "float"
            },
            "SealingTemperature" : {
              "type" : "integer"
            },
            "NotchingDepth" : {
              "type" : "number",
              "format" : "float"
            },
            "WorkingLength" : {
              "type" : "number",
              "format" : "float"
            },
            "MillingDepth" : {
              "type" : "number",
              "format" : "float"
            },
            "Operations" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "StartPosition" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "Dependent" : {
        "type" : "object",
        "properties" : {
          "PipeProtocol" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "XJMFURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "PipeID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "JobID" ]
      },
      "EnumTopBottom" : {
        "type" : "string",
        "enum" : [ "Top", "Bottom" ]
      },
      "CoilBindingDetails" : {
        "type" : "object",
        "properties" : {
          "CoilShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "Disjointing" : {
        "type" : "object",
        "properties" : {
          "InsertSheet" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/InsertSheet"
            }
          },
          "Direction" : {
            "type" : "string",
            "enum" : [ "Alternate", "Left", "None", "Right" ]
          },
          "Units" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Amount" : {
            "type" : "integer"
          },
          "Offset" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        }
      },
      "ResponseKnownMessages" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response"
        }, {
          "type" : "object",
          "properties" : {
            "MessageService" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/MessageService"
              }
            }
          }
        } ]
      },
      "RenderingIntent" : {
        "type" : "string",
        "enum" : [ "AbsoluteColorimetric", "ColorSpaceDependent", "Perceptual", "RelativeColorimetric", "Saturation" ]
      },
      "StackingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "LayerCompression" : {
              "type" : "boolean"
            },
            "LayerAmount" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "LayerLift" : {
              "type" : "boolean"
            },
            "StackAmount" : {
              "type" : "integer"
            },
            "UnderLays" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "Compensate" : {
              "type" : "boolean"
            },
            "MaxAmount" : {
              "type" : "integer"
            },
            "StackCompression" : {
              "type" : "boolean"
            },
            "BundleType" : {
              "$ref" : "#/components/schemas/BundleType"
            },
            "MaxWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "PreStackMethod" : {
              "type" : "string",
              "enum" : [ "All", "First", "None" ]
            },
            "MinAmount" : {
              "type" : "integer"
            },
            "Disjointing" : {
              "$ref" : "#/components/schemas/Disjointing"
            },
            "OutputBin" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "PreStackAmount" : {
              "type" : "integer"
            },
            "MaxHeight" : {
              "type" : "integer"
            },
            "StandardAmount" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "Assembly" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Order" : {
              "type" : "string",
              "enum" : [ "Collecting", "Gathering", "None", "List" ]
            },
            "AssemblySection" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/AssemblySection"
              }
            },
            "BinderySignatureIDs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            }
          },
          "required" : [ "Order" ]
        } ]
      },
      "MISDetails" : {
        "type" : "object",
        "properties" : {
          "WorkTypeDetails" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "WorkType" : {
            "type" : "string",
            "enum" : [ "Original", "Alteration", "Rework" ]
          },
          "CostType" : {
            "type" : "string",
            "enum" : [ "Chargeable", "NonChargeable" ]
          },
          "Complexity" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "Device" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ManufacturerURL" : {
              "$ref" : "#/components/schemas/URL"
            },
            "DeviceClass" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "DeviceID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "MaxRunSpeed" : {
              "type" : "number",
              "format" : "float"
            },
            "XJMFURL" : {
              "$ref" : "#/components/schemas/URL"
            },
            "IconList" : {
              "$ref" : "#/components/schemas/IconList"
            },
            "CostCenterID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "DeviceType" : {
              "type" : "string"
            },
            "DescriptiveName" : {
              "type" : "string"
            },
            "KnownLocalizations" : {
              "$ref" : "#/components/schemas/languages"
            },
            "Revision" : {
              "type" : "string"
            },
            "SerialNumber" : {
              "type" : "string"
            },
            "PresentationURL" : {
              "$ref" : "#/components/schemas/URL"
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              },
              "maxItems" : 2
            },
            "Manufacturer" : {
              "type" : "string"
            },
            "Packaging" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ "XML", "Zip" ]
              }
            },
            "RestApiBaseURL" : {
              "$ref" : "#/components/schemas/URL"
            },
            "URLSchemes" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "JDFVersions" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "enum" : [ 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2.0, 2.1, 2.2, 2.3 ]
              }
            },
            "ICSVersions" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "IdentificationField" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/IdentificationField"
              }
            },
            "Module" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Module"
              }
            }
          },
          "required" : [ "DeviceID" ]
        } ]
      },
      "Resource" : {
        "type" : "object",
        "properties" : {
          "UsageCounter" : {
            "$ref" : "#/components/schemas/UsageCounter"
          },
          "BoxFoldingParams" : {
            "$ref" : "#/components/schemas/BoxFoldingParams"
          },
          "CreasingParams" : {
            "$ref" : "#/components/schemas/CreasingParams"
          },
          "ColorantControl" : {
            "$ref" : "#/components/schemas/ColorantControl"
          },
          "ColorCorrectionParams" : {
            "$ref" : "#/components/schemas/ColorCorrectionParams"
          },
          "ShrinkingParams" : {
            "$ref" : "#/components/schemas/ShrinkingParams"
          },
          "RasterReadingParams" : {
            "$ref" : "#/components/schemas/RasterReadingParams"
          },
          "MiscConsumable" : {
            "$ref" : "#/components/schemas/MiscConsumable"
          },
          "ID" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "PerforatingParams" : {
            "$ref" : "#/components/schemas/PerforatingParams"
          },
          "LaminatingParams" : {
            "$ref" : "#/components/schemas/LaminatingParams"
          },
          "BlockPreparationParams" : {
            "$ref" : "#/components/schemas/BlockPreparationParams"
          },
          "Status" : {
            "type" : "string",
            "enum" : [ "Available", "Unavailable" ]
          },
          "ConventionalPrintingParams" : {
            "$ref" : "#/components/schemas/ConventionalPrintingParams"
          },
          "ImageCompressionParams" : {
            "$ref" : "#/components/schemas/ImageCompressionParams"
          },
          "PrintCondition" : {
            "$ref" : "#/components/schemas/PrintCondition"
          },
          "GrossWeight" : {
            "type" : "number",
            "format" : "float"
          },
          "FontPolicy" : {
            "$ref" : "#/components/schemas/FontPolicy"
          },
          "HoleMakingParams" : {
            "$ref" : "#/components/schemas/HoleMakingParams"
          },
          "Orientation" : {
            "$ref" : "#/components/schemas/Orientation"
          },
          "GluingParams" : {
            "$ref" : "#/components/schemas/GluingParams"
          },
          "PDLCreationParams" : {
            "$ref" : "#/components/schemas/PDLCreationParams"
          },
          "ShapeCuttingParams" : {
            "$ref" : "#/components/schemas/ShapeCuttingParams"
          },
          "EndSheetGluingParams" : {
            "$ref" : "#/components/schemas/EndSheetGluingParams"
          },
          "RunList" : {
            "$ref" : "#/components/schemas/RunList"
          },
          "VerificationResult" : {
            "$ref" : "#/components/schemas/VerificationResult"
          },
          "DieLayout" : {
            "$ref" : "#/components/schemas/DieLayout"
          },
          "ExposedMedia" : {
            "$ref" : "#/components/schemas/ExposedMedia"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "NodeInfo" : {
            "$ref" : "#/components/schemas/NodeInfo"
          },
          "VarnishingParams" : {
            "$ref" : "#/components/schemas/VarnishingParams"
          },
          "Expires" : {
            "type" : "string",
            "format" : "date-time"
          },
          "InsertingParams" : {
            "$ref" : "#/components/schemas/InsertingParams"
          },
          "WindingParams" : {
            "$ref" : "#/components/schemas/WindingParams"
          },
          "WrappingParams" : {
            "$ref" : "#/components/schemas/WrappingParams"
          },
          "ImageEnhancementParams" : {
            "$ref" : "#/components/schemas/ImageEnhancementParams"
          },
          "FeedingParams" : {
            "$ref" : "#/components/schemas/FeedingParams"
          },
          "ColorSpaceConversionParams" : {
            "$ref" : "#/components/schemas/ColorSpaceConversionParams"
          },
          "AmountPool" : {
            "$ref" : "#/components/schemas/AmountPool"
          },
          "ShapeDefProductionParams" : {
            "$ref" : "#/components/schemas/ShapeDefProductionParams"
          },
          "ScreeningParams" : {
            "$ref" : "#/components/schemas/ScreeningParams"
          },
          "CuttingParams" : {
            "$ref" : "#/components/schemas/CuttingParams"
          },
          "SheetOptimizingReport" : {
            "$ref" : "#/components/schemas/SheetOptimizingReport"
          },
          "StrappingParams" : {
            "$ref" : "#/components/schemas/StrappingParams"
          },
          "GeneralID" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/GeneralID"
            }
          },
          "ApprovalDetails" : {
            "$ref" : "#/components/schemas/ApprovalDetails"
          },
          "EmbossingParams" : {
            "$ref" : "#/components/schemas/EmbossingParams"
          },
          "Layout" : {
            "$ref" : "#/components/schemas/Layout"
          },
          "LayoutElementProductionParams" : {
            "$ref" : "#/components/schemas/LayoutElementProductionParams"
          },
          "ThreadSealingParams" : {
            "$ref" : "#/components/schemas/ThreadSealingParams"
          },
          "BundlingParams" : {
            "$ref" : "#/components/schemas/BundlingParams"
          },
          "Transformation" : {
            "$ref" : "#/components/schemas/matrix"
          },
          "Start" : {
            "type" : "string",
            "format" : "date-time"
          },
          "TrappingParams" : {
            "$ref" : "#/components/schemas/TrappingParams"
          },
          "SpinePreparationParams" : {
            "$ref" : "#/components/schemas/SpinePreparationParams"
          },
          "LabelingParams" : {
            "$ref" : "#/components/schemas/LabelingParams"
          },
          "FoldingParams" : {
            "$ref" : "#/components/schemas/FoldingParams"
          },
          "DescriptiveName" : {
            "type" : "string"
          },
          "ThreadSewingParams" : {
            "$ref" : "#/components/schemas/ThreadSewingParams"
          },
          "SheetOptimizingParams" : {
            "$ref" : "#/components/schemas/SheetOptimizingParams"
          },
          "DevelopingParams" : {
            "$ref" : "#/components/schemas/DevelopingParams"
          },
          "BendingParams" : {
            "$ref" : "#/components/schemas/BendingParams"
          },
          "ResourceWeight" : {
            "type" : "number",
            "format" : "float"
          },
          "DieLayoutProductionParams" : {
            "$ref" : "#/components/schemas/DieLayoutProductionParams"
          },
          "StackingParams" : {
            "$ref" : "#/components/schemas/StackingParams"
          },
          "Assembly" : {
            "$ref" : "#/components/schemas/Assembly"
          },
          "Tool" : {
            "$ref" : "#/components/schemas/Tool"
          },
          "BinderySignature" : {
            "$ref" : "#/components/schemas/BinderySignature"
          },
          "PreviewGenerationParams" : {
            "$ref" : "#/components/schemas/PreviewGenerationParams"
          },
          "Device" : {
            "$ref" : "#/components/schemas/Device"
          },
          "Color" : {
            "$ref" : "#/components/schemas/Color"
          },
          "Media" : {
            "$ref" : "#/components/schemas/Media"
          },
          "Duration" : {
            "type" : "string",
            "format" : "duration"
          },
          "ShapeDef" : {
            "$ref" : "#/components/schemas/ShapeDef"
          },
          "ManualLaborParams" : {
            "$ref" : "#/components/schemas/ManualLaborParams"
          },
          "CasingInParams" : {
            "$ref" : "#/components/schemas/CasingInParams"
          },
          "TransferCurve" : {
            "$ref" : "#/components/schemas/TransferCurve"
          },
          "Brand" : {
            "type" : "string"
          },
          "CoverApplicationParams" : {
            "$ref" : "#/components/schemas/CoverApplicationParams"
          },
          "JacketingParams" : {
            "$ref" : "#/components/schemas/JacketingParams"
          },
          "Content" : {
            "$ref" : "#/components/schemas/Content"
          },
          "PreflightReport" : {
            "$ref" : "#/components/schemas/PreflightReport"
          },
          "InkZoneProfile" : {
            "$ref" : "#/components/schemas/InkZoneProfile"
          },
          "BoxPackingParams" : {
            "$ref" : "#/components/schemas/BoxPackingParams"
          },
          "CustomerInfo" : {
            "$ref" : "#/components/schemas/CustomerInfo"
          },
          "WebInlineFinishingParams" : {
            "$ref" : "#/components/schemas/WebInlineFinishingParams"
          },
          "InterpretingParams" : {
            "$ref" : "#/components/schemas/InterpretingParams"
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Ink" : {
            "$ref" : "#/components/schemas/Ink"
          },
          "VerificationParams" : {
            "$ref" : "#/components/schemas/VerificationParams"
          },
          "PalletizingParams" : {
            "$ref" : "#/components/schemas/PalletizingParams"
          },
          "Pallet" : {
            "$ref" : "#/components/schemas/Pallet"
          },
          "SpineTapingParams" : {
            "$ref" : "#/components/schemas/SpineTapingParams"
          },
          "ApprovalParams" : {
            "$ref" : "#/components/schemas/ApprovalParams"
          },
          "PreflightParams" : {
            "$ref" : "#/components/schemas/PreflightParams"
          },
          "TrimmingParams" : {
            "$ref" : "#/components/schemas/TrimmingParams"
          },
          "CommentURL" : {
            "$ref" : "#/components/schemas/URL"
          },
          "DigitalPrintingParams" : {
            "$ref" : "#/components/schemas/DigitalPrintingParams"
          },
          "Component" : {
            "$ref" : "#/components/schemas/Component"
          },
          "SeparationControlParams" : {
            "$ref" : "#/components/schemas/SeparationControlParams"
          },
          "InkZoneCalculationParams" : {
            "$ref" : "#/components/schemas/InkZoneCalculationParams"
          },
          "QualityControlResult" : {
            "$ref" : "#/components/schemas/QualityControlResult"
          },
          "HeadBandApplicationParams" : {
            "$ref" : "#/components/schemas/HeadBandApplicationParams"
          },
          "Comment" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Comment"
            }
          },
          "StartOffset" : {
            "type" : "string",
            "format" : "duration"
          },
          "Bundle" : {
            "$ref" : "#/components/schemas/Bundle"
          },
          "DeliveryParams" : {
            "$ref" : "#/components/schemas/DeliveryParams"
          },
          "ImageSetterParams" : {
            "$ref" : "#/components/schemas/ImageSetterParams"
          },
          "QualityControlParams" : {
            "$ref" : "#/components/schemas/QualityControlParams"
          },
          "LooseBindingParams" : {
            "$ref" : "#/components/schemas/LooseBindingParams"
          },
          "Preview" : {
            "$ref" : "#/components/schemas/Preview"
          },
          "Contact" : {
            "$ref" : "#/components/schemas/Contact"
          },
          "CaseMakingParams" : {
            "$ref" : "#/components/schemas/CaseMakingParams"
          },
          "LayoutShift" : {
            "$ref" : "#/components/schemas/LayoutShift"
          },
          "StitchingParams" : {
            "$ref" : "#/components/schemas/StitchingParams"
          },
          "RenderingParams" : {
            "$ref" : "#/components/schemas/RenderingParams"
          }
        },
        "oneOf" : [ {
          "required" : [ "UsageCounter" ]
        }, {
          "required" : [ "BoxFoldingParams" ]
        }, {
          "required" : [ "CreasingParams" ]
        }, {
          "required" : [ "ColorantControl" ]
        }, {
          "required" : [ "ColorCorrectionParams" ]
        }, {
          "required" : [ "ShrinkingParams" ]
        }, {
          "required" : [ "RasterReadingParams" ]
        }, {
          "required" : [ "MiscConsumable" ]
        }, {
          "required" : [ "PerforatingParams" ]
        }, {
          "required" : [ "LaminatingParams" ]
        }, {
          "required" : [ "BlockPreparationParams" ]
        }, {
          "required" : [ "ConventionalPrintingParams" ]
        }, {
          "required" : [ "ImageCompressionParams" ]
        }, {
          "required" : [ "PrintCondition" ]
        }, {
          "required" : [ "FontPolicy" ]
        }, {
          "required" : [ "HoleMakingParams" ]
        }, {
          "required" : [ "GluingParams" ]
        }, {
          "required" : [ "PDLCreationParams" ]
        }, {
          "required" : [ "ShapeCuttingParams" ]
        }, {
          "required" : [ "EndSheetGluingParams" ]
        }, {
          "required" : [ "RunList" ]
        }, {
          "required" : [ "VerificationResult" ]
        }, {
          "required" : [ "DieLayout" ]
        }, {
          "required" : [ "ExposedMedia" ]
        }, {
          "required" : [ "NodeInfo" ]
        }, {
          "required" : [ "VarnishingParams" ]
        }, {
          "required" : [ "InsertingParams" ]
        }, {
          "required" : [ "WindingParams" ]
        }, {
          "required" : [ "WrappingParams" ]
        }, {
          "required" : [ "ImageEnhancementParams" ]
        }, {
          "required" : [ "FeedingParams" ]
        }, {
          "required" : [ "ColorSpaceConversionParams" ]
        }, {
          "required" : [ "ShapeDefProductionParams" ]
        }, {
          "required" : [ "ScreeningParams" ]
        }, {
          "required" : [ "CuttingParams" ]
        }, {
          "required" : [ "SheetOptimizingReport" ]
        }, {
          "required" : [ "StrappingParams" ]
        }, {
          "required" : [ "ApprovalDetails" ]
        }, {
          "required" : [ "EmbossingParams" ]
        }, {
          "required" : [ "Layout" ]
        }, {
          "required" : [ "LayoutElementProductionParams" ]
        }, {
          "required" : [ "ThreadSealingParams" ]
        }, {
          "required" : [ "BundlingParams" ]
        }, {
          "required" : [ "TrappingParams" ]
        }, {
          "required" : [ "SpinePreparationParams" ]
        }, {
          "required" : [ "LabelingParams" ]
        }, {
          "required" : [ "FoldingParams" ]
        }, {
          "required" : [ "ThreadSewingParams" ]
        }, {
          "required" : [ "SheetOptimizingParams" ]
        }, {
          "required" : [ "DevelopingParams" ]
        }, {
          "required" : [ "BendingParams" ]
        }, {
          "required" : [ "DieLayoutProductionParams" ]
        }, {
          "required" : [ "StackingParams" ]
        }, {
          "required" : [ "Assembly" ]
        }, {
          "required" : [ "Tool" ]
        }, {
          "required" : [ "BinderySignature" ]
        }, {
          "required" : [ "PreviewGenerationParams" ]
        }, {
          "required" : [ "Device" ]
        }, {
          "required" : [ "Color" ]
        }, {
          "required" : [ "Media" ]
        }, {
          "required" : [ "ShapeDef" ]
        }, {
          "required" : [ "ManualLaborParams" ]
        }, {
          "required" : [ "CasingInParams" ]
        }, {
          "required" : [ "TransferCurve" ]
        }, {
          "required" : [ "CoverApplicationParams" ]
        }, {
          "required" : [ "JacketingParams" ]
        }, {
          "required" : [ "Content" ]
        }, {
          "required" : [ "PreflightReport" ]
        }, {
          "required" : [ "InkZoneProfile" ]
        }, {
          "required" : [ "BoxPackingParams" ]
        }, {
          "required" : [ "CustomerInfo" ]
        }, {
          "required" : [ "WebInlineFinishingParams" ]
        }, {
          "required" : [ "InterpretingParams" ]
        }, {
          "required" : [ "Ink" ]
        }, {
          "required" : [ "VerificationParams" ]
        }, {
          "required" : [ "PalletizingParams" ]
        }, {
          "required" : [ "Pallet" ]
        }, {
          "required" : [ "SpineTapingParams" ]
        }, {
          "required" : [ "ApprovalParams" ]
        }, {
          "required" : [ "PreflightParams" ]
        }, {
          "required" : [ "TrimmingParams" ]
        }, {
          "required" : [ "DigitalPrintingParams" ]
        }, {
          "required" : [ "Component" ]
        }, {
          "required" : [ "SeparationControlParams" ]
        }, {
          "required" : [ "InkZoneCalculationParams" ]
        }, {
          "required" : [ "QualityControlResult" ]
        }, {
          "required" : [ "HeadBandApplicationParams" ]
        }, {
          "required" : [ "Bundle" ]
        }, {
          "required" : [ "DeliveryParams" ]
        }, {
          "required" : [ "ImageSetterParams" ]
        }, {
          "required" : [ "QualityControlParams" ]
        }, {
          "required" : [ "LooseBindingParams" ]
        }, {
          "required" : [ "Preview" ]
        }, {
          "required" : [ "Contact" ]
        }, {
          "required" : [ "CaseMakingParams" ]
        }, {
          "required" : [ "LayoutShift" ]
        }, {
          "required" : [ "StitchingParams" ]
        }, {
          "required" : [ "RenderingParams" ]
        }, {
          "not" : {
            "anyOf" : [ {
              "required" : [ "UsageCounter" ]
            }, {
              "required" : [ "BoxFoldingParams" ]
            }, {
              "required" : [ "CreasingParams" ]
            }, {
              "required" : [ "ColorantControl" ]
            }, {
              "required" : [ "ColorCorrectionParams" ]
            }, {
              "required" : [ "ShrinkingParams" ]
            }, {
              "required" : [ "RasterReadingParams" ]
            }, {
              "required" : [ "MiscConsumable" ]
            }, {
              "required" : [ "PerforatingParams" ]
            }, {
              "required" : [ "LaminatingParams" ]
            }, {
              "required" : [ "BlockPreparationParams" ]
            }, {
              "required" : [ "ConventionalPrintingParams" ]
            }, {
              "required" : [ "ImageCompressionParams" ]
            }, {
              "required" : [ "PrintCondition" ]
            }, {
              "required" : [ "FontPolicy" ]
            }, {
              "required" : [ "HoleMakingParams" ]
            }, {
              "required" : [ "GluingParams" ]
            }, {
              "required" : [ "PDLCreationParams" ]
            }, {
              "required" : [ "ShapeCuttingParams" ]
            }, {
              "required" : [ "EndSheetGluingParams" ]
            }, {
              "required" : [ "RunList" ]
            }, {
              "required" : [ "VerificationResult" ]
            }, {
              "required" : [ "DieLayout" ]
            }, {
              "required" : [ "ExposedMedia" ]
            }, {
              "required" : [ "NodeInfo" ]
            }, {
              "required" : [ "VarnishingParams" ]
            }, {
              "required" : [ "InsertingParams" ]
            }, {
              "required" : [ "WindingParams" ]
            }, {
              "required" : [ "WrappingParams" ]
            }, {
              "required" : [ "ImageEnhancementParams" ]
            }, {
              "required" : [ "FeedingParams" ]
            }, {
              "required" : [ "ColorSpaceConversionParams" ]
            }, {
              "required" : [ "ShapeDefProductionParams" ]
            }, {
              "required" : [ "ScreeningParams" ]
            }, {
              "required" : [ "CuttingParams" ]
            }, {
              "required" : [ "SheetOptimizingReport" ]
            }, {
              "required" : [ "StrappingParams" ]
            }, {
              "required" : [ "ApprovalDetails" ]
            }, {
              "required" : [ "EmbossingParams" ]
            }, {
              "required" : [ "Layout" ]
            }, {
              "required" : [ "LayoutElementProductionParams" ]
            }, {
              "required" : [ "ThreadSealingParams" ]
            }, {
              "required" : [ "BundlingParams" ]
            }, {
              "required" : [ "TrappingParams" ]
            }, {
              "required" : [ "SpinePreparationParams" ]
            }, {
              "required" : [ "LabelingParams" ]
            }, {
              "required" : [ "FoldingParams" ]
            }, {
              "required" : [ "ThreadSewingParams" ]
            }, {
              "required" : [ "SheetOptimizingParams" ]
            }, {
              "required" : [ "DevelopingParams" ]
            }, {
              "required" : [ "BendingParams" ]
            }, {
              "required" : [ "DieLayoutProductionParams" ]
            }, {
              "required" : [ "StackingParams" ]
            }, {
              "required" : [ "Assembly" ]
            }, {
              "required" : [ "Tool" ]
            }, {
              "required" : [ "BinderySignature" ]
            }, {
              "required" : [ "PreviewGenerationParams" ]
            }, {
              "required" : [ "Device" ]
            }, {
              "required" : [ "Color" ]
            }, {
              "required" : [ "Media" ]
            }, {
              "required" : [ "ShapeDef" ]
            }, {
              "required" : [ "ManualLaborParams" ]
            }, {
              "required" : [ "CasingInParams" ]
            }, {
              "required" : [ "TransferCurve" ]
            }, {
              "required" : [ "CoverApplicationParams" ]
            }, {
              "required" : [ "JacketingParams" ]
            }, {
              "required" : [ "Content" ]
            }, {
              "required" : [ "PreflightReport" ]
            }, {
              "required" : [ "InkZoneProfile" ]
            }, {
              "required" : [ "BoxPackingParams" ]
            }, {
              "required" : [ "CustomerInfo" ]
            }, {
              "required" : [ "WebInlineFinishingParams" ]
            }, {
              "required" : [ "InterpretingParams" ]
            }, {
              "required" : [ "Ink" ]
            }, {
              "required" : [ "VerificationParams" ]
            }, {
              "required" : [ "PalletizingParams" ]
            }, {
              "required" : [ "Pallet" ]
            }, {
              "required" : [ "SpineTapingParams" ]
            }, {
              "required" : [ "ApprovalParams" ]
            }, {
              "required" : [ "PreflightParams" ]
            }, {
              "required" : [ "TrimmingParams" ]
            }, {
              "required" : [ "DigitalPrintingParams" ]
            }, {
              "required" : [ "Component" ]
            }, {
              "required" : [ "SeparationControlParams" ]
            }, {
              "required" : [ "InkZoneCalculationParams" ]
            }, {
              "required" : [ "QualityControlResult" ]
            }, {
              "required" : [ "HeadBandApplicationParams" ]
            }, {
              "required" : [ "Bundle" ]
            }, {
              "required" : [ "DeliveryParams" ]
            }, {
              "required" : [ "ImageSetterParams" ]
            }, {
              "required" : [ "QualityControlParams" ]
            }, {
              "required" : [ "LooseBindingParams" ]
            }, {
              "required" : [ "Preview" ]
            }, {
              "required" : [ "Contact" ]
            }, {
              "required" : [ "CaseMakingParams" ]
            }, {
              "required" : [ "LayoutShift" ]
            }, {
              "required" : [ "StitchingParams" ]
            }, {
              "required" : [ "RenderingParams" ]
            } ]
          }
        } ]
      },
      "Media" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "ColorMeasurementConditions" : {
              "$ref" : "#/components/schemas/ColorMeasurementConditions"
            },
            "ISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "Brightness" : {
              "type" : "number",
              "format" : "float"
            },
            "PrintingTechnology" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Flute" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "ReliefThickness" : {
              "type" : "number",
              "format" : "float"
            },
            "BackCIEWhiteness" : {
              "type" : "number",
              "format" : "float"
            },
            "RollDiameter" : {
              "type" : "number",
              "format" : "float"
            },
            "FluteDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "PlateTechnology" : {
              "type" : "string",
              "enum" : [ "FlexoAnalogSolvent", "FlexoAnalogThermal", "FlexoDigitalSolvent", "FlexoDigitalThermal", "FlexoDirectEngraving", "InkJet", "Thermal", "UV", "Visible" ]
            },
            "InsideLoss" : {
              "type" : "number",
              "format" : "float"
            },
            "MediaType" : {
              "$ref" : "#/components/schemas/MediaType"
            },
            "CoreWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "ShrinkIndex" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "BackBrightness" : {
              "type" : "number",
              "format" : "float"
            },
            "InnerCoreDiameter" : {
              "type" : "number",
              "format" : "float"
            },
            "Weight" : {
              "type" : "number",
              "format" : "float"
            },
            "Certification" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Certification"
              }
            },
            "Thickness" : {
              "type" : "number",
              "format" : "float"
            },
            "OutsideGain" : {
              "type" : "number",
              "format" : "float"
            },
            "BackOpticalBrightening" : {
              "type" : "number",
              "format" : "float"
            },
            "OpticalBrightening" : {
              "type" : "number",
              "format" : "float"
            },
            "MediaSetCount" : {
              "type" : "integer"
            },
            "MediaColorName" : {
              "$ref" : "#/components/schemas/NamedColor"
            },
            "BackCoating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "BackSpectrum" : {
              "$ref" : "#/components/schemas/TransferFunction"
            },
            "Texture" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "BackISOPaperSubstrate" : {
              "$ref" : "#/components/schemas/ISOPaperSubstrate"
            },
            "MediaColorNameDetails" : {
              "type" : "string"
            },
            "Spectrum" : {
              "$ref" : "#/components/schemas/TransferFunction"
            },
            "GlossValue" : {
              "type" : "number",
              "format" : "float"
            },
            "SleeveInterlock" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "StockType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Polarity" : {
              "$ref" : "#/components/schemas/Polarity"
            },
            "Opacity" : {
              "$ref" : "#/components/schemas/EnumOpacity"
            },
            "MediaQuality" : {
              "type" : "string"
            },
            "ImagableSide" : {
              "type" : "string",
              "enum" : [ "Front", "Back", "Both", "Neither" ]
            },
            "HolePattern" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/HolePattern"
              }
            },
            "Dimension" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "OpacityLevel" : {
              "type" : "number",
              "format" : "float"
            },
            "BackCoatingDetail" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "OuterCoreDiameter" : {
              "type" : "number",
              "format" : "float"
            },
            "MediaUnit" : {
              "type" : "string",
              "enum" : [ "Continuous", "Roll", "Sheet" ]
            },
            "CoatingDetail" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "LabColorValue" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "MediaLayers" : {
              "$ref" : "#/components/schemas/MediaLayers"
            },
            "BackCIETint" : {
              "type" : "number",
              "format" : "float"
            },
            "Coating" : {
              "$ref" : "#/components/schemas/Coating"
            },
            "IdentificationField" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/IdentificationField"
              }
            },
            "TabDimensions" : {
              "$ref" : "#/components/schemas/TabDimensions"
            },
            "BackLabColorValue" : {
              "$ref" : "#/components/schemas/LabColor"
            },
            "CIETint" : {
              "type" : "number",
              "format" : "float"
            },
            "GrainDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "BackGlossValue" : {
              "type" : "number",
              "format" : "float"
            },
            "CIEWhiteness" : {
              "type" : "number",
              "format" : "float"
            },
            "MediaTypeDetails" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "RecycledPercentage" : {
              "$ref" : "#/components/schemas/Percentage"
            }
          },
          "required" : [ "MediaType" ]
        } ]
      },
      "ColorCorrectionOp" : {
        "type" : "object",
        "properties" : {
          "AdjustSaturation" : {
            "type" : "number",
            "format" : "float"
          },
          "AdjustHue" : {
            "type" : "number",
            "format" : "float"
          },
          "AdjustContrast" : {
            "type" : "number",
            "format" : "float"
          },
          "SourceObjects" : {
            "$ref" : "#/components/schemas/SourceObjects"
          },
          "AdjustLightness" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "ResourceQuParams" : {
        "type" : "object",
        "properties" : {
          "ResourceDetails" : {
            "type" : "string",
            "enum" : [ "Brief", "Full" ]
          },
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Types" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Scope" : {
            "$ref" : "#/components/schemas/Scope"
          },
          "JobPartID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ResourceName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "ExternalID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "JobID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "Scope" ]
      },
      "ShapeDef" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Shape" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Shape"
              }
            },
            "FlatDimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "MediaRef" : {
              "type" : "string",
              "format" : "id",
              "pattern" : "^[a-zA-Z_][\\w.-]*$"
            },
            "CutLines" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Dimensions" : {
              "$ref" : "#/components/schemas/shape"
            },
            "Area" : {
              "type" : "number",
              "format" : "float"
            },
            "CutBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "FluteDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "RuleLength" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/RuleLength"
              }
            },
            "ResourceWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "GrainDirection" : {
              "$ref" : "#/components/schemas/MediaDirection"
            },
            "MediaSide" : {
              "$ref" : "#/components/schemas/Side"
            }
          }
        } ]
      },
      "RefAnchor" : {
        "type" : "object",
        "properties" : {
          "Anchor" : {
            "$ref" : "#/components/schemas/Anchor"
          },
          "rRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "AnchorType" : {
            "type" : "string",
            "enum" : [ "Parent", "Sibling" ]
          }
        },
        "required" : [ "Anchor", "AnchorType", "rRef" ]
      },
      "ManualLaborParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "LaborType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "required" : [ "LaborType" ]
        } ]
      },
      "PositionPolicy" : {
        "type" : "string",
        "enum" : [ "Exact", "Free" ]
      },
      "ColorControlStrip" : {
        "type" : "object",
        "properties" : {
          "ColorMeasurementConditions" : {
            "$ref" : "#/components/schemas/ColorMeasurementConditions"
          },
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Rotation" : {
            "type" : "number",
            "format" : "float"
          },
          "CIELABMeasuringField" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/CIELABMeasuringField"
            }
          },
          "Patch" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Patch"
            }
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "StripType" : {
            "type" : "string"
          },
          "DensityMeasuringField" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/DensityMeasuringField"
            }
          }
        }
      },
      "IntentResource" : {
        "$ref" : "#/components/schemas/ProductIntent"
      },
      "GangInfo" : {
        "type" : "object",
        "properties" : {
          "Amount" : {
            "type" : "number",
            "format" : "float"
          },
          "GangName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        },
        "required" : [ "GangName" ]
      },
      "ImageCompression" : {
        "type" : "object",
        "properties" : {
          "DownsampleImages" : {
            "type" : "boolean"
          },
          "JPXQuality" : {
            "type" : "integer"
          },
          "AutoFilterImages" : {
            "type" : "boolean"
          },
          "ConvertImagesToIndexed" : {
            "type" : "boolean"
          },
          "ImageDepth" : {
            "type" : "integer"
          },
          "LZWParams" : {
            "$ref" : "#/components/schemas/LZWParams"
          },
          "ImageResolution" : {
            "type" : "number",
            "format" : "float"
          },
          "JBIG2Params" : {
            "$ref" : "#/components/schemas/JBIG2Params"
          },
          "DCTParams" : {
            "$ref" : "#/components/schemas/DCTParams"
          },
          "EncodeImages" : {
            "type" : "boolean"
          },
          "ImageDownsampleType" : {
            "type" : "string",
            "enum" : [ "Average", "Bicubic", "Subsample" ]
          },
          "ImageAutoFilterStrategy" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ImageDownsampleThreshold" : {
            "type" : "number",
            "format" : "float"
          },
          "ImageType" : {
            "type" : "string",
            "enum" : [ "Color", "Grayscale", "Monochrome" ]
          },
          "JPEG2000Params" : {
            "$ref" : "#/components/schemas/JPEG2000Params"
          },
          "FlateParams" : {
            "$ref" : "#/components/schemas/FlateParams"
          },
          "ImageFilter" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "CCITTFaxParams" : {
            "$ref" : "#/components/schemas/CCITTFaxParams"
          },
          "AntiAliasImages" : {
            "type" : "boolean"
          },
          "DCTQuality" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "ModuleInfo" : {
        "type" : "object",
        "properties" : {
          "ModuleID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ProductionCounter" : {
            "type" : "number",
            "format" : "float"
          },
          "ModuleType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "ModuleCondition" : {
            "$ref" : "#/components/schemas/DeviceCondition"
          },
          "Part" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/Part"
            }
          },
          "ModuleStatus" : {
            "$ref" : "#/components/schemas/DeviceStatus"
          },
          "StatusDetails" : {
            "type" : "string"
          },
          "TotalProductionCounter" : {
            "type" : "number",
            "format" : "float"
          },
          "HourCounter" : {
            "type" : "string",
            "format" : "duration"
          }
        },
        "required" : [ "ModuleID", "ModuleStatus" ]
      },
      "Content" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "SourceBleedBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "ScreenSelector" : {
              "$ref" : "#/components/schemas/ScreenSelector"
            },
            "ContentType" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "PageLabel" : {
              "type" : "string"
            },
            "HasBleeds" : {
              "type" : "boolean"
            },
            "ContentStatus" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Separations" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "SourceClipBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "IsBlank" : {
              "type" : "boolean"
            },
            "IsTrapped" : {
              "type" : "boolean"
            },
            "ImageCompression" : {
              "$ref" : "#/components/schemas/ImageCompression"
            },
            "FileSpec" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/FileSpec"
              }
            },
            "BinderySignatureIDs" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "PositionObj" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/PositionObj"
              }
            },
            "BarcodeProductionParams" : {
              "$ref" : "#/components/schemas/BarcodeProductionParams"
            },
            "SourceTrimBox" : {
              "$ref" : "#/components/schemas/rectangle"
            },
            "OCGControl" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/OCGControl"
              }
            },
            "ContentMetadata" : {
              "$ref" : "#/components/schemas/ContentMetadata"
            }
          }
        } ]
      },
      "SignalKnownSubscriptions" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Signal"
        }, {
          "type" : "object",
          "properties" : {
            "SubscriptionInfo" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/SubscriptionInfo"
              }
            }
          }
        } ]
      },
      "Tabs" : {
        "type" : "object",
        "properties" : {
          "TabsPerBank" : {
            "type" : "integer"
          },
          "TabBrand" : {
            "type" : "string"
          },
          "TabCount" : {
            "type" : "integer"
          },
          "ReinforceBind" : {
            "type" : "boolean"
          },
          "TabExtensionDistance" : {
            "type" : "number",
            "format" : "float"
          },
          "ReinforceColorDetails" : {
            "type" : "string"
          },
          "ReinforceColor" : {
            "$ref" : "#/components/schemas/NamedColor"
          },
          "TabBodyCopy" : {
            "type" : "boolean"
          },
          "ReinforceTabs" : {
            "type" : "boolean"
          }
        }
      },
      "BoxPackingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BoxTypeDetails" : {
              "type" : "string"
            },
            "Pattern" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            },
            "Ties" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "ComponentsPerRow" : {
              "type" : "integer"
            },
            "Columns" : {
              "type" : "integer"
            },
            "UnderLays" : {
              "$ref" : "#/components/schemas/IntegerList"
            },
            "BoxType" : {
              "type" : "string",
              "enum" : [ "Box", "Carton", "Envelope", "Tube" ]
            },
            "FaceDown" : {
              "$ref" : "#/components/schemas/Face"
            },
            "MaxWeight" : {
              "type" : "number",
              "format" : "float"
            },
            "Copies" : {
              "type" : "integer"
            },
            "Layers" : {
              "type" : "integer"
            },
            "Rows" : {
              "type" : "integer"
            }
          },
          "required" : [ "BoxType" ]
        } ]
      },
      "rectangle" : {
        "minItems" : 4,
        "maxItems" : 4,
        "$ref" : "#/components/schemas/FloatList"
      },
      "NodeStatus" : {
        "type" : "string",
        "enum" : [ "Aborted", "Cleanup", "Completed", "InProgress", "Setup", "Stopped", "Suspended", "Waiting" ]
      },
      "ProductionPath" : {
        "type" : "object",
        "properties" : {
          "ProductionPathID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          }
        }
      },
      "AutomatedOverPrintParams" : {
        "type" : "object",
        "properties" : {
          "KnockOutCMYKWhite" : {
            "type" : "boolean"
          },
          "TextSizeThreshold" : {
            "type" : "integer"
          },
          "OverPrintBlackText" : {
            "type" : "boolean"
          },
          "LineArtBlackLevel" : {
            "type" : "number",
            "format" : "float"
          },
          "OverPrintBlackLineArt" : {
            "type" : "boolean"
          },
          "TextBlackLevel" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "ResubmissionParams" : {
        "type" : "object",
        "properties" : {
          "QueueEntryID" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "UpdateMethod" : {
            "type" : "string",
            "enum" : [ "Complete", "Incremental", "Remove" ]
          },
          "URL" : {
            "$ref" : "#/components/schemas/URL"
          }
        },
        "required" : [ "QueueEntryID", "UpdateMethod", "URL" ]
      },
      "Message" : {
        "type" : "object",
        "properties" : {
          "Header" : {
            "$ref" : "#/components/schemas/Header"
          }
        },
        "required" : [ "Header" ]
      },
      "Ink" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "SpecificYield" : {
              "type" : "number",
              "format" : "float"
            },
            "IdentificationField" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/IdentificationField"
              }
            },
            "Certification" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Certification"
              }
            },
            "InkType" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            }
          }
        } ]
      },
      "CombBindingDetails" : {
        "type" : "object",
        "properties" : {
          "CombShape" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FlipBackCover" : {
            "type" : "boolean"
          },
          "Diameter" : {
            "type" : "number",
            "format" : "float"
          }
        }
      },
      "ResponseShutDown" : {
        "$ref" : "#/components/schemas/Response"
      },
      "RegisterMark" : {
        "type" : "object",
        "properties" : {
          "MarkName" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "MarkUsage" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "enum" : [ "Color", "PaperPath", "Tile" ]
            }
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "MarkType" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "Rotation" : {
            "type" : "number",
            "format" : "float"
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          },
          "MarkElement" : {
            "type" : "array",
            "items" : {
              "$ref" : "#/components/schemas/MarkElement"
            }
          }
        }
      },
      "DeviceCondition" : {
        "type" : "string",
        "enum" : [ "OK", "NeedsAttention", "Failure", "Offline" ]
      },
      "EnumFeedQuality" : {
        "type" : "string",
        "enum" : [ "NotActive", "Check", "Waste", "StopNoWaste", "StopWaste" ]
      },
      "PreflightParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "PreflightTest" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/PreflightTest"
              }
            },
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            }
          }
        } ]
      },
      "Emboss" : {
        "type" : "object",
        "properties" : {
          "EdgeShape" : {
            "type" : "string",
            "enum" : [ "Beveled", "Rounded" ]
          },
          "EmbossingType" : {
            "$ref" : "#/components/schemas/EmbossType"
          },
          "ImageSize" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Position" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "ToolRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          },
          "Height" : {
            "type" : "number",
            "format" : "float"
          },
          "EdgeAngle" : {
            "type" : "number",
            "format" : "float"
          },
          "Face" : {
            "$ref" : "#/components/schemas/Face"
          },
          "IdentificationField" : {
            "$ref" : "#/components/schemas/IdentificationField"
          },
          "Direction" : {
            "$ref" : "#/components/schemas/EnumEmbossDirection"
          }
        },
        "required" : [ "Direction", "EmbossingType" ]
      },
      "DigitalPrintingParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "PageDelivery" : {
              "type" : "string",
              "enum" : [ "FanFold", "SameOrderFaceUp", "SameOrderFaceDown", "ReverseOrderFaceUp", "ReverseOrderFaceDown" ]
            },
            "Collate" : {
              "type" : "string",
              "enum" : [ "None", "Sheet" ]
            },
            "FeedSheetLay" : {
              "$ref" : "#/components/schemas/FeedSheetLay"
            },
            "ManualFeed" : {
              "type" : "boolean"
            },
            "SheetLay" : {
              "$ref" : "#/components/schemas/SheetLay"
            },
            "Sides" : {
              "type" : "string",
              "enum" : [ "OneSidedFront", "OneSidedBack", "TwoSided", "Unprinted" ]
            }
          }
        } ]
      },
      "Feeder" : {
        "type" : "object",
        "properties" : {
          "FeederSynchronization" : {
            "type" : "string",
            "enum" : [ "Alternate", "Backup", "Chain", "Primary" ]
          },
          "Loading" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Opening" : {
            "type" : "string",
            "enum" : [ "Back", "Front", "None", "Sucker" ]
          },
          "Position" : {
            "type" : "integer"
          },
          "FeederType" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "FeederQualityParams" : {
            "$ref" : "#/components/schemas/FeederQualityParams"
          },
          "AlternatePositions" : {
            "$ref" : "#/components/schemas/IntegerList"
          },
          "ComponentRef" : {
            "type" : "string",
            "format" : "id",
            "pattern" : "^[a-zA-Z_][\\w.-]*$"
          }
        }
      },
      "RegistrationQuality" : {
        "type" : "object",
        "properties" : {
          "Reference" : {
            "type" : "string",
            "pattern" : "^[a-zA-Z0-9._\\-:]*$"
          },
          "Offset" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Offset", "Reference" ]
      },
      "SeparationControlParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "AutomatedOverPrintParams" : {
              "$ref" : "#/components/schemas/AutomatedOverPrintParams"
            }
          }
        } ]
      },
      "textElement" : {
        "type" : "string"
      },
      "HeadBandApplicationParams" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Glue" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Glue"
              }
            },
            "Length" : {
              "type" : "number",
              "format" : "float"
            },
            "Width" : {
              "type" : "number",
              "format" : "float"
            }
          }
        } ]
      },
      "ScavengerArea" : {
        "type" : "object",
        "properties" : {
          "Center" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Size" : {
            "$ref" : "#/components/schemas/XYPair"
          },
          "Separations" : {
            "type" : "array",
            "items" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        },
        "required" : [ "Center" ]
      },
      "Bundle" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "BundleItem" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/BundleItem"
              },
              "minItems" : 1
            }
          },
          "required" : [ "BundleItem" ]
        } ]
      },
      "BoxFoldAction" : {
        "type" : "object",
        "properties" : {
          "Action" : {
            "type" : "string",
            "enum" : [ "BackFoldComplete", "BackFoldDiagonal", "BackFoldCompleteDiagonal", "FrontFoldComplete", "FrontFoldDiagonal", "FrontFoldCompleteDiagonal", "Glue", "LongFoldLeftToRight", "LongFoldRightToLeft", "LongPreFoldLeftToRight", "LongPreFoldRightToLeft", "Milling", "ReverseFold", "Rotate90", "Rotate180", "Rotate270" ]
          },
          "Glue" : {
            "$ref" : "#/components/schemas/Glue"
          },
          "FoldIndex" : {
            "$ref" : "#/components/schemas/XYPair"
          }
        },
        "required" : [ "Action", "FoldIndex" ]
      },
      "UpdateGranularity" : {
        "type" : "string",
        "enum" : [ "All", "ChangesOnly" ]
      },
      "Preview" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "FileSpec" : {
              "$ref" : "#/components/schemas/FileSpec"
            },
            "Compensation" : {
              "type" : "string",
              "enum" : [ "None", "Film", "Plate", "Press" ]
            },
            "Size" : {
              "$ref" : "#/components/schemas/XYPair"
            },
            "PreviewFileType" : {
              "type" : "string",
              "enum" : [ "PNG", "CIP3Multiple", "CIP3Single" ]
            },
            "CTM" : {
              "$ref" : "#/components/schemas/matrix"
            },
            "Resolution" : {
              "$ref" : "#/components/schemas/XYPair"
            }
          }
        } ]
      },
      "PDFPath" : {
        "type" : "string"
      },
      "Contact" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/SpecificResource"
        }, {
          "type" : "object",
          "properties" : {
            "Company" : {
              "$ref" : "#/components/schemas/Company"
            },
            "ContactTypeDetails" : {
              "type" : "array",
              "items" : {
                "type" : "string",
                "pattern" : "^[a-zA-Z0-9._\\-:]*$"
              }
            },
            "Address" : {
              "$ref" : "#/components/schemas/Address"
            },
            "UserID" : {
              "type" : "string"
            },
            "ComChannel" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/ComChannel"
              }
            },
            "Person" : {
              "$ref" : "#/components/schemas/Person"
            },
            "CostCenterID" : {
              "type" : "string",
              "pattern" : "^[a-zA-Z0-9._\\-:]*$"
            }
          }
        } ]
      },
      "Response" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Message"
        }, {
          "type" : "object",
          "properties" : {
            "Notification" : {
              "$ref" : "#/components/schemas/Notification"
            },
            "ReturnCode" : {
              "type" : "integer"
            }
          }
        } ]
      },
      "Anchor" : {
        "type" : "string",
        "enum" : [ "BottomCenter", "BottomLeft", "BottomRight", "Center", "CenterLeft", "CenterRight", "TopCenter", "TopLeft", "TopRight" ]
      },
      "CCITTFaxParams" : {
        "type" : "object",
        "properties" : {
          "Uncompressed" : {
            "type" : "boolean"
          },
          "EndOfBlock" : {
            "type" : "boolean"
          },
          "K" : {
            "type" : "integer"
          },
          "EndOfLine" : {
            "type" : "boolean"
          },
          "EncodedByteAlign" : {
            "type" : "boolean"
          }
        }
      }
    }
  }
}